import React from "react";
import * as S from "./style/CommentBtn.style";
import { CommentBtnProps } from "../../types/feed";

const CommentBtn: React.FC<CommentBtnProps> = ({
  commentOpen,
  commentClicked,
  commentsNum,
}) => {
  return (
    <S.CommentBtnContainer>
      <S.CommentIcon $commentClicked={commentClicked} onClick={commentOpen} />
      <S.CommentNumber $commentClicked={commentClicked}>
        {commentsNum}
      </S.CommentNumber>
    </S.CommentBtnContainer>
  );
};

export default CommentBtn;
