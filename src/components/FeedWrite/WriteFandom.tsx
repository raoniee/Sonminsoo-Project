import React from "react";
import styled from "styled-components";
import dropdown from "../../assets/images/svg/ic-arrow-down-14.svg";
const WritingFandom = styled.div`
  width: 100%;
  height: 112px;
  border-bottom: 1px solid #b9bed7;
  padding: 16px;
`;
const WritingFandomText = styled.p`
  font-size: 14px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
`;
const WritingFandomBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin: 16px 0
`;
const WritingFandomSelect = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 16px;
  color: #1d1b20;
`;
const WritingFandomIcon = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
const WriteFandom = () => {
  return (
    <WritingFandom>
      <WritingFandomText>작성 팬덤</WritingFandomText>
      <WritingFandomBox>
        <WritingFandomSelect>꾹이의 모든 것</WritingFandomSelect>
        <WritingFandomIcon src={dropdown} />
      </WritingFandomBox>
    </WritingFandom>
  );
};
export default WriteFandom;
