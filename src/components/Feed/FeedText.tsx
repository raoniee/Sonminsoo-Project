import React, { useState } from "react";
import * as S from "./style/FeedText.style";
import { FeedTextProps } from "../../types/feed";

const Text: React.FC<FeedTextProps> = ({ content }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLimit: number = 50;

  const displayedComment = isShowMore ? content : content.slice(0, textLimit);

  return (
    <S.FeedText>
      {displayedComment}
      {content.length > textLimit && (
        <S.More onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? "...접기" : "...더보기"}
        </S.More>
      )}
    </S.FeedText>
  );
};

export default Text;
