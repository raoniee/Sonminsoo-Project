import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector<
    { auth: any },
    { accessToken: string; checkIsSignIn: boolean }
  >(({ auth }) => auth);
  return auth;
};

export default useAuth;
