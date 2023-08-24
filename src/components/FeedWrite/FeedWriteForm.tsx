import { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
const WriteForm = styled.form``;
const FeedWriteContent = styled.textarea`
  width: 100%;
  height: 216px;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  padding: 16px;
  font-family: "Pretendard-Medium";
  &::placeholder {
    font-size: 16px;
    color: #6c7080;
    line-height: 140%;
  }
`;
const FeedWriteTags = styled.input`
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #b9bed7;
  border-top: 1px solid #b9bed7;
  padding: 16px 12px;
  box-sizing: border-box;
  font-family: "Pretendard-Medium";
  color: #6138f8;
  &::placeholder {
    font-size: 16px;
    color: #808080;
  }
`;
const FeedWriteForm = () => {
  //#넣어입력하면 배열로 변환
  const [hashTagInput, handleHashTagChange] = useInput("");
  const hashtagss = hashTagInput.match(/#\w+/g) || [];

  return (
    <WriteForm>
      <FeedWriteContent placeholder="작성할 내용을 입력해 주세요.&#13;(정의로운 손민수 주의사항 내용 필요해 보임)"></FeedWriteContent>
      <FeedWriteTags
        placeholder="태그입력하기(최대 10개)"
        onChange={handleHashTagChange}
        value={hashTagInput}
      ></FeedWriteTags>
    </WriteForm>
  );
};
export default FeedWriteForm;
