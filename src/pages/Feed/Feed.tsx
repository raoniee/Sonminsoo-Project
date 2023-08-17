import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import ItemBox from "./Item";
import HashTag from "./HashTag";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import FeedText from "./FeedText";
import Comment from "./Comment";
import idol1 from "../../assets/images/png/idol1.png";

const FeedImage = styled.div`
  width: 100%;
  height: 390px;
  cursor: pointer;
  background-image: url(${idol1});
`;

const BtnWrap = styled.div`
  display: flex;
  margin-top: 31px;
`;
const Line = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 6px;
  margin-top: 22px;
`;

const Feed: React.FC = () => {
  const [commentClicked, setCommentClicked] = useState<boolean>(false);

  const commentOpen = () => {
    setCommentClicked(!commentClicked);
  };

  return (
    <>
      <FeedHeader />
      <FeedImage />
      <ItemBox />
      <FeedText />
      <HashTag />
      <BtnWrap>
        <LikeBtn />
        <CommentBtn commentOpen={commentOpen} commentClicked={commentClicked} />
      </BtnWrap>
      {commentClicked ? <Comment /> : null}
      <Line />
    </>
  );
};

export default Feed;
