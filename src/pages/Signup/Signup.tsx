import { useState } from "react";
import { Outlet } from "react-router-dom";
import * as S from "./style/Signup.Style";
import { userInfoType } from "./types/SignUp.type";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [userInfo, setUserInfo] = useState<userInfoType>({
    password: "",
    userName: "",
    birthDate: "",
    phoneNumber: "",
    code: "",
    email: "",
  });

  return (
    <S.Container>
      <Outlet
        context={{
          email,
          emailCode,
          setEmail,
          password: userInfo.password,
          setUserInfo,
          setEmailCode,
          userInfo,
        }}
      />
    </S.Container>
  );
};
export default Signup;
