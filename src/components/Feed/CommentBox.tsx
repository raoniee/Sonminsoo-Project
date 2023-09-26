import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import CommentBtn from "./CommentBtn";
import LikeBtn from "./LikeBtn";
import Comment from "./Comment";
import { CommentBoxProps } from "../../types/feed";
import { CommentType } from "../../types/feed";

import * as S from "../../pages/Feed/style/Feed.style";

const CommentBox: React.FC<CommentBoxProps> = ({ feedId, comments }) => {
  const [openComment, setOpenComment] = useState<number | undefined>();
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCommentId, setSelectedCommentId] = useState<
    number | undefined
  >();
  const [commentsData, setCommentsData] = useState<CommentType[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const toggleComment = (id: number) => {
    if (openComment === id) {
      setOpenComment(undefined);
    } else {
      setOpenComment(id);
      fetchComments(id);
    }
  };

  const showModal = (commentId: number) => {
    setSelectedCommentId(commentId);
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const fetchComments = async (feedId?: number) => {
    setIsLoadingComments(true);
    try {
      const response = await axios.get(`/comments/${feedId}`);
      setCommentsData(response.data.data);
    } catch (error) {
    } finally {
      setIsLoadingComments(false);
    }
  };

  return (
    <>
      <S.BtnWrap
        onClick={() => {
          console.log(commentsData);
        }}
      >
        <LikeBtn feedId={feedId} />
        <CommentBtn
          commentOpen={() => toggleComment(feedId)}
          commentClicked={openComment === feedId}
          comments={comments}
        />
      </S.BtnWrap>
      {!isLoadingComments && openComment === feedId && (
        <Comment
          showModal={showModal}
          commentsData={commentsData}
          feedId={feedId}
        />
      )}
    </>
  );
};

export default CommentBox;
