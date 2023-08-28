import { createContext, useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 450px; /* Adjust the max-width as per your design preference. */
  margin: 50px auto;
  padding: 30px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  margin-top: 25px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: border 0.2s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const InputNewPassword = styled(Input)``;

const InputNewPasswordCerti = styled(Input)`
  background-color: #f3f3f3;
`;

const Title = styled.h1`
  font-size: 26px;
  color: #333;
  font-weight: 500;
  margin-bottom: 30px;
`;

const ResetNewPassword = () => {
  const [authValid, setAuthValid] = useState("");
  // const useResetContext = useContext(resetContext);
  // console.log(useResetContext, "useResetContext");

  // const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   axios
  //     .get(
  //       `http://146.56.143.108/auth/verificationCode?email=${useResetContext?.email}`
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
  //       email: useResetContext?.email,
  //       code: authValid,
  //     })
  //     .then((res) => {
  //       console.log("email res", res);
  //       useResetContext?.setSignupStep("emailCertification");
  //       // setEmailAuthValidState(true);
  //     })
  //     .catch((e) => console.log(e));
  // };

  return (
    <Container>
      <Title>
        새로운 비밀번호를
        <br /> 입력해 해주세요
      </Title>

      <Form>
        <div>
          <InputNewPassword
            type="password"
            id="newPassword"
            placeholder="비밀번호를 입력해 주세요."
            // value={useResetContext?.email}
            // onChange={(e) => useResetContext?.setEmail(e.target.value)}
          />
          <InputNewPasswordCerti
            type="password"
            id="newPasswordCerti"
            placeholder="비밀번호를 다시 입력해 주세요."
            // value={useResetContext?.email}
            // onChange={(e) => useResetContext?.setEmail(e.target.value)}
          />
        </div>
      </Form>
    </Container>
  );
};

export default ResetNewPassword;
