import { signupContext } from "./index";
import React, { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #555;
  margin-bottom: 15px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const EnterMembersInfo = () => {
  // const navigation = useNavigate();
  // useEffect(() => {
  //   if (email === "") {
  //     navigation("/signup");
  //   }
  // }, []);
  // const  useContext(signupContext);
  const { email, setUserInfo, userInfo } = useContext(signupContext);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    console.log(e.target.value);
    //@ts-ignore
    //TODO: prev 타입 에러 해결
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <Container>
      <Title>개인정보 입력하기</Title>
      <SubTitle>정의로운 손민수 이용을 위해 약관에 동의해주세요</SubTitle>
      <SubTitle>기본정보입력</SubTitle>
      <Form>
        <Label htmlFor="email">이메일을 입력해 주세요.</Label>
        <Input
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요"
          value={email}
        />
        <Label htmlFor="password">비밀번호를 입력해 주세요</Label>
        <Input
          type="text"
          id="password"
          placeholder="비밀번호를 입력해 주세요"
          value={userInfo.password}
          onChange={handleInfoChange}
        />
        <Label htmlFor="passwordConfirm">비밀번호를 다시 입력해 주세요</Label>
        <Input
          type="text"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해 주세요"
        />
        <SubTitle>개인정보입력</SubTitle>
      </Form>
      <Form>
        <Label htmlFor="userName">이름을 입력해 주세요.</Label>
        <Input
          type="text"
          id="userName"
          placeholder="이름을 입력해 주세요."
          onChange={handleInfoChange}
          value={userInfo.userName}
        />
        <Label htmlFor="birthDate">
          생년월일을 입력해 주세요 &#40;ex 991121&#41;
        </Label>
        <Input
          type="text"
          id="birthDate"
          placeholder="생년월일을 입력해 주세요 &#40;ex 991121&#41;"
          onChange={handleInfoChange}
          value={userInfo.birthDate}
        />
        <Label htmlFor="phoneNumber">
          전화번호를 입력해 주세요 &#40;ex 01022222222&#41;
        </Label>
        <Input
          type="text"
          id="phoneNumber"
          placeholder="전화번호를 입력해 주세요 &#40;ex 01022222222&#41;"
          onChange={handleInfoChange}
          value={userInfo.phoneNumber}
        />
      </Form>
    </Container>
  );
};
export default EnterMembersInfo;
