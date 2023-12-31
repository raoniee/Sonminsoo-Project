import React, { useState } from "react";
import axios from "axios";
import CommentItem from "../Feed/CommentItem";
import * as S from "./style/Comment.style";
import { Feed, CommentType } from "../../types/feed";

type FeedCommentProps = {
  feedData: Feed;
  showModal: () => void;
};

const Comment: React.FC<FeedCommentProps> = ({ feedData, showModal }) => {
  const [commentInput, setCommentInput] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>(
    feedData.comments || []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const handleSubmitComment = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const newComment = {
      id: new Date().getTime(),
      profileImg:
        "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10010049_001_ALT100/crocs",
      user_name: "Anonymous",
      content: commentInput,
      created_at: new Date().toISOString(),
    };
    try {
      const response = await axios.get(
        `http://localhost:5000/feed/${feedData.id}`
      );
      const feed = response.data;

      const updatedComments = [...feed.comments, newComment];
      await axios.put(`http://localhost:5000/feed/${feedData.id}`, {
        ...feed,
        comments: updatedComments,
      });
      setComments(updatedComments);
      setCommentInput("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {comments.map((comment) => {
        return (
          <CommentItem
            key={comment.id}
            comment={comment}
            showModal={showModal}
          />
        );
      })}
      <S.CommentInput onSubmit={handleSubmitComment}>
        <S.CommentInputBox
          placeholder="댓글을 입력해 주세요"
          onChange={handleInputChange}
          value={commentInput}
        />
        <S.SendBtn type="submit" />
      </S.CommentInput>
    </>
  );
};

export default Comment;
