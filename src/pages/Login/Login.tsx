import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const data = JSON.stringify({ email, password });
  let loginResponse = axios.create({
    baseURL: "/auth",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  return (
    <div>
      <h2>로그인</h2>
      <form>
        {/* <label htmlFor="email">이메일을 입력해 주세요.</label> */}
        <input
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <label htmlFor="password">비밀번호를 입력해 주세요.</label> */}
        <input
          type={passwordType ? "text" : "password"}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            return setPasswordType(!passwordType);
          }}
        >
          password
        </button>
        <p>
          <Link to={"/"}>아이디 또는 비밀번호를 잊어버리셧나요?</Link>
        </p>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("id", email);
              console.log("pw", password);
              loginResponse
                .post("/signin", data)
                .then((res) => console.log(res))
                .catch((e) => console.log(e));
            }}
          >
            로그인
          </button>
        </div>
        <p>
          새로운 계정이 필요하신가요? <Link to={"/signup"}>Sign Up</Link>
        </p>
        <p>빠르게 로그인하기</p>
      </form>
    </div>
  );
};
export default Login;
