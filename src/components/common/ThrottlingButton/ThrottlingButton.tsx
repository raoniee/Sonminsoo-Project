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
  boxSizing,
  whiteSpace,
  onClick,
}: {
  background: string;
  border: string;
  margin?: string;
  padding?: string;
  color?: string;
  width?: string;
  height?: string;
  boxSizing?: string;
  whiteSpace?: string;
  content: string;
  onClick: () => void;
}) => {
  console.log("throttling Button");
  let timerId: NodeJS.Timeout | undefined;

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("onClick");
    if (timerId) {
      return;
    }
    onClick();

    timerId = setTimeout(() => {
      timerId = undefined;
    }, 2000);
  }, []);

  return (
    <Button
      background={background}
      border={border}
      margin={margin ? margin : undefined}
      padding={padding ? padding : undefined}
      color={color ? color : undefined}
      width={width ? width : undefined}
      height={height ? height : undefined}
      boxSizing={boxSizing ? boxSizing : undefined}
      whiteSpace={whiteSpace ? whiteSpace : undefined}
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
