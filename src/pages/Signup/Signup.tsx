import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import * as S from "./style/Signup.Style";
import { Button } from "../../elements/Button";

type userInfoType = {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
};

type signupContextType = {
  email: string;
  setEmail: (value: string) => void;
  setSignupStep: (value: string) => void;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
  userInfo: userInfoType;
};

export const signupContext = createContext<signupContextType>(
  {} as signupContextType
);

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
          background="#6138F8"
          border="none"
          color="#fff"
          onClick={() => {
            navigation("emailCertification");
            setSignupStep("emailCertification");
          }}
        >
          다음
        </Button>
      );
    if (signupStep === "emailCertification")
      return (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          value="다음"
          onClick={() => {
            navigation("enterMembersInfo");
            setSignupStep("enterMembersInfo");
          }}
        >
          다음
        </Button>
      );
    if (signupStep === "enterMembersInfo")
      return (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          value="회원가입 완료"
          onClick={() => {
            axios
              .post(`/auth/sign-up`, {
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
        >
          회원가입 완료
        </Button>
      );
    return;
  };

  return (
    <signupContext.Provider
      value={{ email, setEmail, setSignupStep, setUserInfo, userInfo }}
    >
      {/* outletcontext로 수정 */}
      <S.Container>
        <Outlet />
        {nextButton()}
      </S.Container>
    </signupContext.Provider>
  );
};
export default Signup;
