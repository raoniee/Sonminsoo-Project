import { useContext } from "react";
import { UserInfoContext } from "../App";

const useGetToken = () => {
  const dispatch = useContext(UserInfoContext);

  return dispatch?.state.accessToken;
};
export default useGetToken;
