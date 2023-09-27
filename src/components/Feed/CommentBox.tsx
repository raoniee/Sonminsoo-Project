import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CommentBtn from "./CommentBtn";
import LikeBtn from "./LikeBtn";
import Comment from "./Comment";
import { CommentBoxProps } from "../../types/feed";
import { CommentType } from "../../types/feed";
import AppAlertModal from "../common/AlertModal/AppAlertModal";

import * as S from "../../pages/Feed/style/Feed.style";
const CommentBox: React.FC<CommentBoxProps> = ({ feedId, comments }) => {
  const axiosPrivate = useAxiosPrivate();
  const [openComment, setOpenComment] = useState<number | undefined>();
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [commentsData, setCommentsData] = useState<CommentType[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [commentsNum, setCommentsNum] = useState<number>(comments);
  const [selectedCommentId, setSelectedCommentId] = useState<
    number | undefined
  >();

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
  const handleDeleteComment = async (id: number) => {
    try {
      await axiosPrivate.delete(`/comments/${id}`);
      setCommentsData((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      alert("댓글 작성자가 아닙니다.");
    }
  };

  return (
    <>
      <S.BtnWrap>
        <LikeBtn feedId={feedId} />
        <CommentBtn
          commentOpen={() => toggleComment(feedId)}
          commentClicked={openComment === feedId}
          commentsNum={commentsNum}
        />
      </S.BtnWrap>
      {!isLoadingComments && openComment === feedId && (
        <Comment
          showModal={showModal}
          commentsData={commentsData}
          feedId={feedId}
          addNewComment={(newComment) => {
            setCommentsData((prevComments) => [...prevComments, newComment]);
            setCommentsNum((prevCommentsNum) => prevCommentsNum + 1);
          }}
        />
      )}
      {modalOpen && (
        <AppAlertModal
          setModalOpen={setModalOpen}
          title={"댓글 삭제"}
          content={"댓글을 삭제하시겠습니까?"}
          yesContent={"삭제"}
          warning={true}
          yesClickHandler={() => {
            if (selectedCommentId) {
              handleDeleteComment(selectedCommentId);
              setSelectedCommentId(undefined);
              document.body.style.overflow = "unset";
              setModalOpen(false);
            }
          }}
        />
      )}
    </>
  );
};

export default CommentBox;
