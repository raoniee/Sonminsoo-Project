import { signupContext } from "./Signup";
import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import styled from "styled-components";
import PageHeader from "./PageHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  font-family: "Arial", sans-serif;
`;

const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 10px;
`;

const SubAgreement = styled.h2`
  font-size: 24px;
  color: #555;
  margin-bottom: 15px;
`;

const SubAgreement2 = styled.h1`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Label = styled.label`
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
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <Container>
      {/* <PageHeader totalPages={3} currentPage={3} /> */}
      <Agreement>개인정보 입력하기</Agreement>
      <SubAgreement>
        정의로운 손민수 이용을 위해 <br />
        아래의 정보를 입력해 주세요
      </SubAgreement>
      <SubAgreement2>기본정보입력</SubAgreement2>
      <Form>
        <Label id="email">
          {email ? email : "다시 이메일 요청을 해주세요"}
        </Label>
        <Input
          type="text"
          id="password"
          placeholder="비밀번호를 입력해 주세요"
          value={userInfo.password}
          onChange={handleInfoChange}
        />
        <Input
          type="text"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해 주세요"
        />
      </Form>
      <Form>
        <SubAgreement2>개인정보입력</SubAgreement2>
        <Input
          type="text"
          id="userName"
          placeholder="이름을 입력해 주세요."
          onChange={handleInfoChange}
          value={userInfo.userName}
        />
        <Input
          type="text"
          id="birthDate"
          placeholder="생년월일을 입력해 주세요 &#40;ex 991121&#41;"
          onChange={handleInfoChange}
          value={userInfo.birthDate}
        />
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
