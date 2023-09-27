import { useContext, useMemo } from "react";
import { UserInfoContext } from "../App";

const useAuth = () => {
  const dispatch = useContext(UserInfoContext);
  console.log("useAuth");
  const returnValue = useMemo(() => {
    return {
      accessToken: dispatch?.state.accessToken,
      checkIsSignIn: dispatch?.state.checkIsSignIn,
    };
  }, [dispatch?.state.accessToken, dispatch?.state.checkIsSignIn]);
  return returnValue;
};
export default useAuth;
