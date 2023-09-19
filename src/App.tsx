import { createContext, useEffect, useReducer } from "react";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import axios from "./api/axios";
import useSocket from "./hooks/useSocket";
import { Socket } from "socket.io-client";
import Main from "./pages/Main";
import useAuth from "./hooks/useAuth";
import reducer from "./Context/Reducer";

type userInfo = {
  accessToken: string;
  checkIsSignIn: boolean;
  id: number;
  image: string;
  introduction: string;
  nickName: string;
};

const initialState = {
  accessToken: "",
  checkIsSignIn: false,
  id: 0,
  image: "",
  introduction: "",
  nickName: "",
};

export const SocketContext = createContext<Socket | undefined>(undefined);
export const UserInfoContext = createContext<
  { state: userInfo; dispatch: React.Dispatch<any> } | undefined
>(undefined);

const App = () => {
  const socket = useSocket();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { checkIsSignIn } = useAuth();

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname !== "/" && !checkIsSignIn) {
      const tryAutoSignIn = async () => {
        try {
          const res = await axios.get("/auth/auto-sign-in");
          console.log(res);
          dispatch({ type: "AUTH", accessToken: res.headers.authorization });
        } catch {
          dispatch(dispatch({ type: "AUTH", accessToken: "" }));
        }
      };
      tryAutoSignIn();
    }
  }, [checkIsSignIn, dispatch]);

  return (
    <UserInfoContext.Provider value={{ state, dispatch }}>
      <SocketContext.Provider value={socket}>
        <RouterProvider router={Router} fallbackElement={<Main />} />
      </SocketContext.Provider>
    </UserInfoContext.Provider>
  );
};

export default App;
