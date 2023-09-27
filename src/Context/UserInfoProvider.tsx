import { useReducer } from "react";
import { INITUSERINFO } from "../constant/UserInfoInitialState";
import reducer from "./Reducer";
import {
  userInfoStateContext,
  userInfoDispatchContext,
} from "./UserInfoContext";

const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITUSERINFO);

  return (
    <userInfoStateContext.Provider value={state}>
      <userInfoDispatchContext.Provider value={dispatch}>
        {children}
      </userInfoDispatchContext.Provider>
    </userInfoStateContext.Provider>
  );
};

export default UserInfoProvider;
