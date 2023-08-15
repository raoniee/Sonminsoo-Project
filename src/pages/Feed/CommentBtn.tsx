import React from "react";
import styled from "styled-components";
import comment from "../../assets/images/svg/ic-message-circle.svg";
import commentActive from "../../assets/images/svg/ic-message-active.svg";
type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
};
type CommentIconProps = Omit<CommentBtnProps, "commentOpen">;
const CommentBtnContainer = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
const CommentIcon = styled.div<CommentIconProps>`
  width: 24px;
  height: 24px;
  background: url(${(props) =>
    props.commentClicked ? commentActive : comment});
  cursor: pointer;
`;
const CommentNumber = styled.span<CommentIconProps>`
  font-size: 15px;
  margin-left: 3px;
  color: ${(props) => (props.commentClicked ? "#208DF1" : "#6c7080")};
`;

const CommentBtn: React.FC<CommentBtnProps> = ({
  commentOpen,
  commentClicked,
}) => {
  return (
    <CommentBtnContainer>
      <CommentIcon commentClicked={commentClicked} onClick={commentOpen} />
      <CommentNumber commentClicked={commentClicked}>2</CommentNumber>
    </CommentBtnContainer>
  );
};

export default CommentBtn;
