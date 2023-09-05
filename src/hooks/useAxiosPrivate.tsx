import { useSelector } from "react-redux";
import axios from "axios";

const useAxiosPrivate = () => {
  const token = useSelector(({ auth }) => auth.accessToken);

  const axiosPrivate = axios.create({
    baseURL: `${process.env.REACT_APP_URL}/users`,
    headers: { Authorization: "1", "Content-Type": "application/json" },
    withCredentials: true,
  });

  axiosPrivate.interceptors.request.use((config) => {
    config.headers.Authorization = token;

    return config;
  });

  return axiosPrivate;
};
export default useAxiosPrivate;
