import { useContext } from "react";
import { UserInfoContext } from "../App";

const useAuth = () => {
  const dispatch = useContext(UserInfoContext);
  console.log("useAuth");
  return {
    accessToken: dispatch?.state.accessToken,
    checkIsSignIn: dispatch?.state.checkIsSignIn,
  };
};
export default useAuth;
