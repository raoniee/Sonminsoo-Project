import React, { createContext } from "react";
import { actionType, userInfo } from "../types/contextUserInfo";

type userInfoDispatch = React.Dispatch<actionType>;

export const userInfoStateContext = createContext<userInfo | undefined>(
  undefined
);
export const userInfoDispatchContext = createContext<
  userInfoDispatch | undefined
>(undefined);
