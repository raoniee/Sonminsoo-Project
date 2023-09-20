import React, { useCallback } from "react";
import { Button } from "../../../elements/Button";

const ThrottlingButton = ({
  background,
  border,
  margin,
  padding,
  color,
  content,
  width,
  height,
  boxsizing,
  whitespace,
  onClick,
}: {
  background: string;
  border: string;
  margin?: string;
  padding?: string;
  color?: string;
  width?: string;
  height?: string;
  boxsizing?: string;
  whitespace?: string;
  content: string;
  onClick: () => void;
}) => {
  // console.log(content + "throttling Button");
  let timerId: NodeJS.Timeout | undefined;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("onClick");
      if (timerId) {
        return;
      }
      onClick();

      timerId = setTimeout(() => {
        timerId = undefined;
      }, 2000);
    },
    [onClick]
  );

  return (
    <Button
      background={background}
      border={border}
      margin={margin ? margin : undefined}
      padding={padding ? padding : undefined}
      color={color ? color : undefined}
      width={width ? width : undefined}
      height={height ? height : undefined}
      boxsizing={boxsizing ? boxsizing : undefined}
      whitespace={whitespace ? whitespace : undefined}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};

export default React.memo(
  ThrottlingButton,
  (prevProps, nextProps) => prevProps.onClick === nextProps.onClick
);

// export default ThrottlingButton;
