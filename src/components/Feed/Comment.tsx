import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import CommentItem from "../Feed/CommentItem";
import * as S from "./style/Comment.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { constants } from "http2";

type CommentType = {
  id: number;
  feedId: number;
  createdAt: string;
  content: string;
  parent: number;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  replies?: {};
};
type FeedCommentProps = {
  showModal: () => void;
  comments: CommentType[];
  feedId: number;
};

const Comment: React.FC<FeedCommentProps> = ({
  comments,
  showModal,
  feedId,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [commentInput, setCommentInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const submitComments = async (id: number) => {
    try {
      const response = await axiosPrivate.post(`/users/comments/${id}`, {
        parentId: null,
        content: commentInput,
      });
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      {comments &&
        comments.map((comment) => {
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
          onClick={(e) => {
            e.preventDefault();
            submitComments(feedId);
          }}
        />
      </S.CommentInput>
    </>
  );
};

export default Comment;
