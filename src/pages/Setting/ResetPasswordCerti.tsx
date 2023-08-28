import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/reset.css";
import axios from "axios";
import styled from "styled-components";

const resetPasswordCerti = () => {
  const [authValid, setAuthValid] = useState("");
  const useSignupContext = useContext(signupContext);
  console.log(useSignupContext, "useSignupContext");

  // const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   axios
  //     .get(
  //       `http://146.56.143.108/auth/verificationCode?email=${useSignupContext?.email}`
  //     )
  //     .then((res) => console.log("email res", res))
  //     .catch((e) => console.log(e));
  // };
  // const handleEmailAuthVaildClick = (
  //   e: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   e.preventDefault();
  //   axios
  //     .post(`http://146.56.143.108/auth/verificationCode`, {
  //       email: useSignupContext?.email,
  //       code: authValid,
  //     })
  //     .then((res) => {
  //       console.log("email res", res);
  //       useSignupContext?.setSignupStep("emailCertification");
  //       // setEmailAuthValidState(true);
  //     })
  //     .catch((e) => console.log(e));
  // };

  return (
    <Container>
      <h1>
        비밀번호 재설정을 위해
        <br /> 현재 사용중인 비밀번호를
        <br /> 입력해 해주세요
      </h1>

      <Form>
        <div>
          <InputPassword
            type="password"
            id="password"
            placeholder="비밀번호를 입력해 주세요."
            // value={useSignupContext?.email}
            // onChange={(e) => useSignupContext?.setEmail(e.target.value)}
          />
        </div>
      </Form>
    </Container>
  );
};
export default ResetPasswordCerti;
