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
import axios from "axios";

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
type FeedData = {
  id: number;
  author: string;
  fandom_name: string;
  profileImage: string;
};
const Feed: React.FC = () => {
  const [commentClicked, setCommentClicked] = useState<boolean>(false);
  const [feedData, setFeedData] = useState<FeedData[]>([
    {
      id: 1,
      author: "John Doe",
      fandom_name: "Idol",
      profileImage: "https://picsum.photos/40/40",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/data/feedData.json"
        );
        setFeedData(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  const commentOpen = () => {
    setCommentClicked(!commentClicked);
  };

  return (
    <>
      <FeedHeader feedData={feedData} />
      <FeedImage />
      <ItemBox />
      <FeedText />
      <HashTag />
      <BtnWrap>
        <LikeBtn />
        <CommentBtn commentOpen={commentOpen} commentClicked={commentClicked} />
      </BtnWrap>
      <Line />
      {commentClicked ? <Comment /> : null}
    </>
  );
};

export default Feed;
