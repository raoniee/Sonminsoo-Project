import React, { useState, useContext } from "react";
import axios from "axios";
import { signupContext } from "./index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  color: #6138f8;
`;

const Subtitle = styled.h2`
  color: #1d1b20;
  max-width: 600px;
  margin-bottom: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  color: #777;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1em;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const TextWithLink = styled.p`
  color: #777;

  span {
    color: #007bff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EmailCertification = () => {
  const [authValid, setAuthValid] = useState("");
  const useSignupContext = useContext(signupContext);
  console.log(useSignupContext, "useSignupContext");

  const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .get(
        `http://146.56.143.108/auth/verificationCode?email=${useSignupContext?.email}`
      )
      .then((res) => console.log("email res", res))
      .catch((e) => console.log(e));
  };
  const handleEmailAuthVaildClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    axios
      .post(`http://146.56.143.108/auth/verificationCode`, {
        email: useSignupContext?.email,
        code: authValid,
      })
      .then((res) => {
        console.log("email res", res);
        useSignupContext?.setSignupStep("emailCertification");
        // setEmailAuthValidState(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Title>본인인증하기</Title>
      <Subtitle>정의로운 손민수 이용을 위해 약관에 동의해주세요</Subtitle>
      <Form>
        <Label htmlFor="email">이메일을 입력해 주세요.</Label>
        <Input
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요."
          value={useSignupContext?.email}
          onChange={(e) => useSignupContext?.setEmail(e.target.value)}
        />
        <Button onClick={handleEmailAuthClick}>인증번호 발송 하기</Button>
        <Label htmlFor="emailCertificaton">
          이메일 인증 번호를 입력해 주세요
        </Label>
        <Input
          type="text"
          id="emailCertificaton"
          placeholder="이메일 인증 번호를 입력해 주세요"
          value={authValid}
          onChange={(e) => setAuthValid(e.target.value)}
        />
        <Button onClick={handleEmailAuthVaildClick}>인증하기</Button>
        <TextWithLink>
          이메일 인증번호가 발송되지 않았나요?<span>재발송하기</span>
        </TextWithLink>
      </Form>
    </Container>
  );
};
export default EmailCertification;
