import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";
import axios from "../../api/axios";
import styled from "styled-components";
// import { axiosPrivate } from "../../api/axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 400px;
  margin: 50px auto;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 124px;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  width: 91%;
  text-align: center;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledP = styled.p`
  text-align: center;
  margin-bottom: 65px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

const axiosPrivate = axios.create({
  baseURL: `/api/v1`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const data = JSON.stringify({ email, password });
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => {
    return state.auth.accessToken;
  });
  useEffect(() => {
    console.log("token!", auth);
  }, []);

  return (
    <Container>
      <Title>로그인</Title>
      <StyledForm>
        <StyledInput
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type={passwordType ? "text" : "password"}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          <StyledLink to={"/"}>
            아이디 또는 비밀번호를 잊어버리셧나요?
          </StyledLink>
        </p>
        <div>
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("/auth/sign-in", {
                  email,
                  password,
                })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            로그인
          </StyledButton>
        </div>
        <StyledP>
          새로운 계정이 필요하신가요?{" "}
          <StyledLink to={"/signup"}>Sign Up</StyledLink>
        </StyledP>
        <StyledP>빠르게 로그인하기</StyledP>
      </StyledForm>
    </Container>
  );
};

export default Login;
