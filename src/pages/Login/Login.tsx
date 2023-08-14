import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>로그인</h2>
      <form>
        <label htmlFor="email">이메일을 입력해 주세요.</label>
        <label htmlFor="password">비밀번호를 입력해 주세요.</label>
        <p>
          <Link to={"/"}>아이디 또는 비밀번호를 잊어버리셧나요?</Link>
        </p>
        <div>
          <button>로그인</button>
        </div>
        <p>
          새로운 계정이 필요하신가요? <Link to={"/"}>Sign Up</Link>
        </p>
        <p>빠르게 로그인하기</p>
      </form>
    </div>
  );
};
export default Login;
