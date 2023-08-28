import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";
import axios from "../../api/axios";
import * as S from "./style/Login.style";

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
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.StyledForm>
        <S.StyledInput
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <S.StyledInput
          type={passwordType ? "text" : "password"}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <p>
          <Link to={"/"}>아이디 또는 비밀번호를 잊어버리셧나요?</Link>
        </p>
        <div>
          <S.StyledButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
          </S.StyledButton>
        </div>
        <S.P>
          새로운 계정이 필요하신가요?
          <S.LinkTag to={"/signup"}>Sign Up</S.LinkTag>
        </S.P>
        <S.P>빠르게 로그인하기</S.P>
      </S.StyledForm>
    </S.Container>
  );
};

export default Login;
