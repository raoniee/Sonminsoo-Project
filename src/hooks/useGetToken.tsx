import { useContext } from "react";
import { useSelector } from "react-redux";
import { UserInfoContext } from "../App";

const useGetToken = () => {
  // const token = useSelector(({ auth }) => auth.accessToken);
  const dispatch = useContext(UserInfoContext);
  console.log("get token");
  return dispatch?.state.accessToken;
};
export default useGetToken;
