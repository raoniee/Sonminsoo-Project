import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useEffect } from "react";
import { useUserInfoDispatch } from "../../hooks/useUserInfo";

export const kakaoSignInHandler = () => {
  const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
  const REDIRECT_URI = `${process.env.REACT_APP_HOST}/login/kakao-callback`;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
  window.location.href = link;
};

const OauthKakao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useUserInfoDispatch();

  const code = location.search.replace(/\?code=/i, "");

  const domain = window.location.origin;

  useEffect(() => {
    axios
      .post("/auth/sign-in/kakao", {
        code,
        domain,
      })
      .then((res) => {
        dispatch({
          type: "AUTH",
          accessToken: res.headers.authorization,
        });
        navigate("/home");
      })
      .catch(() => navigate("/login"));
  }, [code, dispatch, domain, navigate]);

  return <></>;
};

export default OauthKakao;
