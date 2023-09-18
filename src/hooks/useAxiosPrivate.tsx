import { useEffect } from "react";
import useAuth from "./useAuth";
import { axiosPrivate } from "../api/axios";

const useAxiosPrivate = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use((config) => {
      if (!config.headers["Authorization"] && accessToken) {
        config.headers["Authorization"] = accessToken;
        config.baseURL += "/users";
      }

      return config;
    });

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [accessToken]);

  return axiosPrivate;
};
export default useAxiosPrivate;
