import { createContext, useEffect } from "react";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import axios from "./api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/config/rootReducer";
import useSocket from "./hooks/useSocket";
import { Socket } from "socket.io-client";
import Main from "./pages/Main";
import useAuth from "./hooks/useAuth";

export const SocketContext = createContext<Socket | undefined>(undefined);

const App = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const { checkIsSignIn } = useAuth();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname !== "/" && !checkIsSignIn) {
      const tryAutoSignIn = async () => {
        try {
          const res = await axios.get("/auth/auto-sign-in");
          dispatch(setToken(res.headers.authorization));
        } catch {
          dispatch(setToken(""));
        }
      };

      tryAutoSignIn();
    }
  }, [checkIsSignIn, dispatch]);

  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={Router} fallbackElement={<Main />} />
    </SocketContext.Provider>
  );
};

export default App;
