import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../assets/images/svg/profile1.svg";
import more from "../../assets/images/svg/ic-more-vertical-16.svg";
import CommentInput from "./CommentInput";

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  margin: 19px 0;
`;
const Profile = styled.div`
  background: url(${profile});
  width: 40px;
  height: 40px;
  margin-right: 7px;
`;
const CommentContent = styled.div`
  width: 300px;
`;
const ContentWrap = styled.div`
  display: flex;
  margin-bottom: 6px;
`;
const Nickname = styled.div`
  font-size: 14px;
  font-weight: 700;
  colro: #1d1b20;
`;
const Time = styled.div`
  color: #6c7080;
  font-size: 13px;
  font-weight: 500;
  margin-left: 6px;
`;
const CommentText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 135%;
  color: #1d1b20;
`;
const MoreBtn = styled.div`
  background: url(${more});
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const Line = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 6px;
  margin-top: 22px;
`;
const Comment = () => {
  return (
    <>
      <CommentContainer>
        <Profile />
        <CommentContent>
          <ContentWrap>
            <Nickname>아마추어 손민수</Nickname>
            <Time>10분 전</Time>
          </ContentWrap>
          <CommentText>
            와아 ㅜㅜ 저도 이거 봤어요!! 꾹이가 리허설 할 때, 입은 연습복 정보도
            감사합니당!!
          </CommentText>
        </CommentContent>
        <MoreBtn />
      </CommentContainer>
      <Line />
      <CommentInput />
    </>
  );
};
export default Comment;
