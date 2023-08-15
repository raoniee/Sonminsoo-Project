import React, { useState } from "react";
import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import StatusBar from "./StatusBar";
import ItemBox from "./Item";
import HashTag from "./HashTag";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import FeedText from "./FeedText";
import Comment from "./Comment";
import idol1 from "../../assets/images/png/idol1.png";

const FeedContainer = styled.div`
  width: 390px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const FeedImage = styled.div`
  width: 100%;
  height: 390px;
  background: url(${idol1}) no-repeat center center;
  cursor: pointer;
`;

const BtnWrap = styled.div`
  display: flex;
  margin-top: 31px;
`;


const Feed: React.FC = () => {
  const [commentClicked, setCommentClicked] = useState<boolean>(false);
  const commentOpen = () => {
    setCommentClicked(!commentClicked);
  };
  return (
    <FeedContainer>
      <StatusBar />
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

    </FeedContainer>
  );
};

export default Feed;
