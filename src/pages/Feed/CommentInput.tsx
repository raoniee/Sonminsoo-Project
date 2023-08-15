import React, { useState } from "react";
import styled from "styled-components";
import naviIcon from "../../assets/images/svg/ic-navigation.svg";
const InputBg = styled.form`
  display: flex;
  align-items: center;
`;
const CommentInputBox = styled.input`
  width: 308px;
  height: 40px;
  border-radius: 10px;
  background: #ebeef2;
  border: none;
  margin: 16px 0 16px 16px;
  outline: none;
  &::placeholder {
    padding: 13px;
    color: #6c7080;
    fontsize: 14px;
    font-weight: 500;
  }
`;
const SendBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  background-color: #208df1;
  cursor: pointer;
  margin-right: 20px;
  background-image: url(${naviIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
`;
const CommentInput = () => {
  return (
    <InputBg>
      <CommentInputBox placeholder="댓글을 입력해 주세요"></CommentInputBox>
      <SendBtn></SendBtn>
    </InputBg>
  );
};

export default CommentInput;
