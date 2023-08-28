import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import { signupContext } from "./index";
import styled from "styled-components";
import PageHeader from "./PageHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 10px;
`;

const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
  margin-bottom: 20px;
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

const InputEmail = styled.input`
  padding: 0.5em;
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1em;
  font-size: 16px;
  outline: none;
`;

const InputNum = styled.input`
  padding: 0.5em;
  width: 60%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1em;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  background-color: #208df1;
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
  font-size: 13px;
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
      .get(`/auth/verification-code?email=${useSignupContext?.email}`)
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
      {/* <PageHeader totalPages={3} currentPage={2} /> */}
      <Agreement>본인인증하기</Agreement>
      <SubAgreement>
        정의로운 손민수 이용을 위해
        <br /> 이메일 인증을 해주세요
      </SubAgreement>
      <Form>
        <div>
          <InputEmail
            type="text"
            id="email"
            placeholder="이메일을 입력해 주세요."
            value={useSignupContext?.email}
            onChange={(e) => useSignupContext?.setEmail(e.target.value)}
          />
          <Button onClick={handleEmailAuthClick}>인증번호발송</Button>
        </div>
        <div>
          <InputNum
            type="text"
            id="emailCertificaton"
            placeholder="이메일 인증 번호를 입력해 주세요"
            value={authValid}
            onChange={(e) => setAuthValid(e.target.value)}
          />
          <Button onClick={handleEmailAuthVaildClick}>인증하기</Button>
        </div>
        <TextWithLink>
          이메일 인증번호가 발송되지 않았나요?<span>재발송하기</span>
        </TextWithLink>
      </Form>
    </Container>
  );
};
export default EmailCertification;
