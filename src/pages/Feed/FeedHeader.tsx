import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import profile1 from "../../assets/images/svg/profile1.svg";

const FeedHeaderContainer = styled.div`
  widht: 100%;
  height: 60px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: lightgray;
  cursor: pointer;
  background-image: url(${profile1});
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  width: 294px;
`;
const Nickname = styled.div`
  // height: 14px;
  font-size: 14px;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
  cursor: pointer;
`;
const ContentWrap = styled.div`
  font-size: 13px;
  display: flex;
`;
const FeedName = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
const Time = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  margin-left: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #d9d9d9;
    margin-right: 5px;
    top: 50%;
    left: -6px;
    transform: translateY(-50%);
  }
`;
const MoreBtn = styled.div`
  width: 24px;
  height: 24px;
  background: url(${more}) no-repeat center center;
  cursor: pointer;
`;
type FeedHeaderData = {
  id: number;
  user_name: string;
  fandom_name: string;
  profileImage: string;
};

const FeedHeader: React.FC = () => {
  const [feedHeaderData, setFeedHeaderData] = useState<FeedHeaderData[]>([
    {
      id: 1,
      user_name: "정의로운 손민수",
      fandom_name: "꾹이의 모든 것",
      profileImage: "https://picsum.photos/40/40",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/data/feedUserData.json"
        );
        setFeedHeaderData(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <FeedHeaderContainer>
      <Profile />
      <HeaderContent>
        <Nickname>{feedHeaderData[0].user_name}</Nickname>
        <ContentWrap>
          <FeedName>{feedHeaderData[0].fandom_name}</FeedName>
          <Time>10분전</Time>
        </ContentWrap>
      </HeaderContent>
      <MoreBtn />
    </FeedHeaderContainer>
  );
};

export default FeedHeader;
