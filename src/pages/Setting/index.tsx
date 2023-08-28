import { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import axios from "axios";
import styled from "styled-components";

interface userInfoType {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
}

interface resetContextType {
  setResetPasswordStep: (value: string) => void;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
  userInfo: userInfoType;
}

export const resetContext = createContext<resetContextType>(
  {} as resetContextType
);

const Container = styled.div`
  padding: 40px;
  max-width: 600px;
  margin: 50px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 15px 0;
  padding: 15px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #007bff;
  color: #ffffff;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  h2 {
    margin: 0;
  }
`;

const Setting: React.FC = () => {
  const [resetPasswordStep, setResetPasswordStep] = useState("putid");
  const [userInfo, setUserInfo] = useState<userInfoType>({
    password: "",
    userName: "",
    birthDate: "",
    phoneNumber: "",
  });
  const navigation = useNavigate();

  const nextButton = () => {
    if (resetPasswordStep === "ResetPasswordCerti")
      return (
        <button
          type="button"
          value="다음"
          onClick={() => {
            navigation("ResetNewPassword");
            setResetPasswordStep("ResetNewPassword");
          }}
        />
      );
    if (resetPasswordStep === "ResetNewPassword")
      return (
        <button
          type="button"
          value="다음"
          // onClick={() => {
          //   axios
          //     .post(`http://146.56.143.108/auth/setting`, {
          //       email,
          //       password: userInfo.password,
          //       userName: userInfo.userName,
          //       birthDate: userInfo.birthDate,
          //       phoneNumber: userInfo.phoneNumber,
          //     })
          //     .then((res) => {
          //       console.log(res);
          //       navigation("index");
          //       setResetPasswordStep("index");
          //     })
          //     .catch((e) => console.log(e));
          // }}
        />
      );
    return;
  };

  return (
    // <resetContext.Provider>
    //   value={{ resetPasswordStep, setResetPasswordStep, setUserInfo, userInfo }}
    <Container>
      <Header>설정</Header>
      <StyledLink to="/postId">
        <h2>개인정보 수정</h2>
      </StyledLink>
      <StyledLink to="/resetPasswordCerti">
        <h2>비밀번호 재설정</h2>
      </StyledLink>
      <StyledLink to="/SonDecalogue">
        <h2>정의로운 손민수 십계명</h2>
      </StyledLink>
      <StyledLink to="/">
        <h2>로그아웃</h2>
      </StyledLink>
    </Container>
    // </resetContext.Provider>
  );
};

export default Setting;
