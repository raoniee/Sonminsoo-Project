import React from "react";
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
    console.log(token, "interceptingAuth");

    config.headers.Authorization = token;

    console.log(config, "config");

    return config;
  });

  return axiosPrivate;
};
export default useAxiosPrivate;
