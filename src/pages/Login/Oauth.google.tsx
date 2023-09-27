import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useContext, useEffect } from "react";
import { useUserInfoDispatch } from "../../hooks/useUserInfo";

export const googleSignIngHandler = () => {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = `${process.env.REACT_APP_HOST}/login/google-callback`;
  const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=profile openid email&response_type=code`;
  window.location.href = link;
};

const OauthGoogle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useUserInfoDispatch();

  const url = new URLSearchParams(location.search);
  const code = url.get("code");

  const domain = window.location.origin;

  useEffect(() => {
    axios
      .post("/auth/sign-in/google", {
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

export default OauthGoogle;
