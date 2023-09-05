import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const useSocket = () => {
  const token = useSelector(({ auth }) => auth.accessToken);

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
