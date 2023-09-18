import { useSelector } from "react-redux";
import { useContext } from "react";
import { UserInfoContext } from "../App";

// const useAuth = () => {
//   const auth = useSelector<
//     { auth: any },
//     { accessToken: string; checkIsSignIn: boolean }
//   >(({ auth }) => auth);
//   return auth;
// };

const useAuth = () => {
  const dispatch = useContext(UserInfoContext);
  console.log("useAuth");
  return {
    accessToken: dispatch?.state.accessToken,
    checkIsSignIn: dispatch?.state.checkIsSignIn,
  };
};
export default useAuth;
