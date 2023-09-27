import { useContext, useMemo } from "react";
import { UserInfoContext } from "../Context/UserInfoContext";

const useGetToken = () => {
  const dispatch = useContext(UserInfoContext);

  const returnValue = useMemo(() => {
    return dispatch?.state.accessToken;
  }, [dispatch?.state.accessToken]);

  return returnValue;
};
export default useGetToken;
