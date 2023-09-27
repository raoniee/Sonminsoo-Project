import React, { useState } from "react";
import CommentItem from "../Feed/CommentItem";
import * as S from "./style/Comment.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { CommentType } from "../../types/feed";

type FeedCommentProps = {
  showModal: (commentId: number) => void;
  commentsData: CommentType[];
  feedId: number;
  addNewComment: (comment: CommentType) => void;
};

const Comment: React.FC<FeedCommentProps> = ({
  commentsData,
  showModal,
  feedId,
  addNewComment,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [commentInput, setCommentInput] = useState<string>("");
  const [commentList, setCommentList] = useState<CommentType[]>(commentsData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const submitComments = async (feedId: number) => {
    if (!commentInput.trim()) {
      return;
    }
    try {
      const response = await axiosPrivate.post(`/comments/${feedId}`, {
        parentId: null,
        content: commentInput,
      });
      setCommentInput("");
      setCommentList([...commentList, response.data.data]);
      addNewComment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {commentList &&
        commentList.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              comment={comment}
              showModal={showModal}
            />
          );
        })}
      <S.CommentInput>
        <S.CommentInputBox
          placeholder="댓글을 입력해 주세요"
          onChange={handleInputChange}
          value={commentInput}
        />
        <S.SendBtn
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            submitComments(feedId);
          }}
        />
      </S.CommentInput>
    </>
  );
};

export default Comment;
