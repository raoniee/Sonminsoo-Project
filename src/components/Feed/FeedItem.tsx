import React, { useState } from "react";

import FeedHeader from "./FeedHeader";
import FeedContent from "./FeedContent";
import CommentBox from "./CommentBox";
import FeedDelete from "./FeedDelete";
import AppAlertModal from "../common/AlertModal/AppAlertModal";
import * as S from "../../pages/Feed/style/Feed.style";
import { FeedProps } from "../../types/feed";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const FeedItem: React.FC<FeedProps> = ({ feedData }) => {
  const axiosPrivate = useAxiosPrivate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isFeedDelete, setIsFeedDelete] = useState<boolean>(false);
  const [selectedCommentId, setSelectedCommentId] = useState<
    number | undefined
  >();

  const showModal = (commentId: number) => {
    setSelectedCommentId(commentId);
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };
  const handleDelete = async (id: number) => {
    try {
      await axiosPrivate.delete(`/comments/${id}`);
    } catch (error) {
      alert("댓글 작성자가 아닙니다.");
    }
  };

  return (
    <>
      <FeedHeader
        feedId={feedData.id}
        author={feedData.author}
        fandom={feedData.fandom}
        createdAt={feedData.createdAt}
        setIsFeedDelete={setIsFeedDelete}
      />
      <S.FeedImage src={feedData.image} />
      <FeedContent feedData={feedData} />
      <CommentBox
        feedId={feedData.id}
        comments={feedData.comments}
        showModal={showModal}
      />
      {modalOpen && (
        <AppAlertModal
          setModalOpen={setModalOpen}
          title={"댓글 삭제"}
          content={"댓글을 삭제하시겠습니까?"}
          yesContent={"삭제"}
          warning={true}
          yesClickHandler={() => {
            if (selectedCommentId) {
              handleDelete(selectedCommentId);
              setSelectedCommentId(undefined);
              document.body.style.overflow = "unset";
              setModalOpen(false);
            }
          }}
        />
      )}
      {isFeedDelete && (
        <FeedDelete setIsFeedDelete={setIsFeedDelete} feedId={feedData.id} />
      )}
    </>
  );
};

export default FeedItem;
