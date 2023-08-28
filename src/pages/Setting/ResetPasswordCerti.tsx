import { createContext, useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 400px; // You can adjust the max-width as per your design preference.
  margin: 40px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const InputPassword = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: border 0.2s;

  &:focus {
    border-color: #007bff; // This gives a blue border when focused. Adjust the color to your liking.
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.4;
  color: #333;
`;

const ResetPasswordCerti = () => {
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
        비밀번호 재설정을 위해
        <br /> 현재 사용중인 비밀번호를
        <br /> 입력해 해주세요
      </Title>

      <Form>
        <div>
          <InputPassword
            type="password"
            id="password"
            placeholder="비밀번호를 입력해 주세요."
            // value={useResetContext?.email}
            // onChange={(e) => useResetContext?.setEmail(e.target.value)}
          />
        </div>
      </Form>
    </Container>
  );
};

export default ResetPasswordCerti;
