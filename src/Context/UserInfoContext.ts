import { createContext } from "react";
import { userInfo } from "../types/contextUserInfo";

export const UserInfoContext = createContext<
  { state: userInfo; dispatch: React.Dispatch<any> } | undefined
>(undefined);
