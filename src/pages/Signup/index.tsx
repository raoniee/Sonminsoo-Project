import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import axios from "axios";
import styled from "styled-components";

interface userInfoType {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
}

interface signupContextType {
  email: string;
  setEmail: (value: string) => void;
  setSignupStep: (value: string) => void;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
  userInfo: userInfoType;
}

export const signupContext = createContext<signupContextType>(
  {} as signupContextType
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
`;

const Header = styled.div`
  font-size: 24px;
  color: #6138f8;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Button = styled.input`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  background-color: #6138f8;
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Signup: React.FC = () => {
  const [signupStep, setSignupStep] = useState("terms");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState<userInfoType>({
    password: "",
    userName: "",
    birthDate: "",
    phoneNumber: "",
  });
  const navigation = useNavigate();

  const nextButton = () => {
    if (signupStep === "terms")
      return (
        <Button
          type="button"
          value="다음"
          onClick={() => {
            navigation("emailCertification");
            setSignupStep("emailCertification");
          }}
        />
      );
    if (signupStep === "emailCertification")
      return (
        <Button
          type="button"
          value="다음"
          onClick={() => {
            navigation("enterMembersInfo");
            setSignupStep("enterMembersInfo");
          }}
        />
      );
    if (signupStep === "enterMembersInfo")
      return (
        <Button
          type="button"
          value="회원가입 완료"
          onClick={() => {
            axios
              .post(`http://146.56.143.108/auth/signup`, {
                email,
                password: userInfo.password,
                userName: userInfo.userName,
                birthDate: userInfo.birthDate,
                phoneNumber: userInfo.phoneNumber,
              })
              .then((res) => {
                console.log(res);
                navigation("signUpComplete");
                setSignupStep("signUpComplete");
              })
              .catch((e) => console.log(e));
          }}
        />
      );
    return;
  };

  return (
    <signupContext.Provider
      value={{ email, setEmail, setSignupStep, setUserInfo, userInfo }}
    >
      <Container>
        <Header>header</Header>
        <Outlet />
        {nextButton()}
      </Container>
    </signupContext.Provider>
  );
};
export default Signup;
