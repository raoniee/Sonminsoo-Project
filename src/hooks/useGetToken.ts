import { useUserInfoState } from "./useUserInfo";

const useGetToken = () => {
  const userInfo = useUserInfoState();

  return userInfo.accessToken;
};
export default useGetToken;
