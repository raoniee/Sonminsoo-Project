import React from "react";
import * as S from "./style/CommentBtn.style";
import { CommentBtnProps } from "../../types/feed";

const CommentBtn: React.FC<CommentBtnProps> = ({
  commentOpen,
  commentClicked,
  feedData,
}) => {
  return (
    <S.CommentBtnContainer>
      <S.CommentIcon $commentClicked={commentClicked} onClick={commentOpen} />
      <S.CommentNumber $commentClicked={commentClicked}>
        {feedData?.comments}
      </S.CommentNumber>
    </S.CommentBtnContainer>
  );
};

export default CommentBtn;
