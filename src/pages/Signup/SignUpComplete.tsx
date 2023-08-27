import React from "react";
import styled from "styled-components";

const CompletionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const CompletionMessage = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  color: #6138f8;
  font-family: "Arial", sans-serif;
`;

const SignUpComplete = () => {
  return (
    <CompletionContainer>
      <CompletionMessage>회원가입 완료되었습니다.</CompletionMessage>
    </CompletionContainer>
  );
};

export default SignUpComplete;
