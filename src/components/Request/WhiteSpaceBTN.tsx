import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 358px;
  height: 57px;
  border: 1px solid #6138f8;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  text-align: center;
  color: #6138f8;
`;

const WhiteSpaceBTN: React.FC = () => {
  return <Button>답변하기</Button>;
};

export default WhiteSpaceBTN;
