import { useEffect } from "react";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import axios from "./api/axios";
import useSocket from "./hooks/useSocket";
import Main from "./pages/Main";
import useAuth from "./hooks/useAuth";
import { SocketContext } from "./Context/SocketContext";
import { useUserInfoDispatch } from "./hooks/useUserInfo";

const App = () => {
  const socket = useSocket();
  const dispatch = useUserInfoDispatch();
  const { accessToken, checkIsSignIn } = useAuth();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname !== "/" && !checkIsSignIn) {
      console.log("access token", accessToken);
      const tryAutoSignIn = async () => {
        try {
          const res = await axios.get("/auth/auto-sign-in");
          console.log(res);
          dispatch({ type: "AUTH", accessToken: res.headers.authorization });
        } catch {
          dispatch({ type: "AUTH", accessToken: "" });
        }
      };
      tryAutoSignIn();
    }
  }, [accessToken, checkIsSignIn, dispatch]);

  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={Router} fallbackElement={<Main />} />
    </SocketContext.Provider>
  );
};

export default App;
