import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as S from "./style/Feed.style";
import FeedHeaderBar from "../../components/Feed/FeedHeaderBar";
import FeedHeader from "../../components/Feed/FeedHeader";
import ItemBox from "../../components/Feed/Item";
import HashTag from "../../components/Feed/HashTag";
import LikeBtn from "../../components/Feed/LikeBtn";
import CommentBtn from "../../components/Feed/CommentBtn";
import FeedText from "../../components/Feed/FeedText";
import Comment from "../../components/Feed/Comment";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import CloseModal from "../../components/Feed/CloseModal";
import FeedDelete from "../../components/Feed/FeedDelete";
import { Feed } from "../../types/feed";

const FeedIndex = () => {
  const [openCommentId, setOpenCommentId] = useState<number | undefined>();
  const [feedData, setFeedData] = useState<Feed[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isFeedDelete, setIsFeedDelete] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feed");
      console.log(response);
      setFeedData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  const toggleComment = (id: number) => {
    if (openCommentId === id) {
      setOpenCommentId(undefined);
    } else {
      setOpenCommentId(id);
    }
  };
  return (
    <S.FeedContainer>
      <FeedHeaderBar />
      {feedData?.map((feed) => (
        <React.Fragment key={feed.id}>
          <FeedHeader feedData={feed} setIsFeedDelete={setIsFeedDelete} />
          <S.FeedImage src={feed.feedImg} />
          <ItemBox feedData={feed} />
          <FeedText feedData={feed} />
          <HashTag feedData={feed} />
          <S.BtnWrap>
            <LikeBtn />
            <CommentBtn
              commentOpen={() => toggleComment(feed.id)}
              commentClicked={openCommentId === feed.id}
              feedData={feed}
            />
          </S.BtnWrap>
          {openCommentId === feed.id && (
            <Comment feedData={feed} showModal={showModal} />
          )}
          <S.Line />
        </React.Fragment>
      ))}
      {openCommentId === undefined && <FooterNavBar />}
      {modalOpen && <CloseModal setModalOpen={setModalOpen} />}
      {isFeedDelete && <FeedDelete setIsFeedDelete={setIsFeedDelete} />}
    </S.FeedContainer>
  );
};

export default FeedIndex;
