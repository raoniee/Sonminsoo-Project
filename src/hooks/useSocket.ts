import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import useGetToken from "./useGetToken";

const useSocket = () => {
  //TODO: 충래님 확인 필요
  const getToken = useGetToken();

  const token = getToken ? getToken : "";
  const socket = useMemo(
    () =>
      io(`${process.env.REACT_APP_SOCKET}`, {
        extraHeaders: {
          Authorization: token,
        },
        autoConnect: false,
      }),
    [token]
  );

  useEffect(() => {
    if (token) {
      socket.connect();
    }
  }, [socket, token]);

  return socket;
};

export default useSocket;
