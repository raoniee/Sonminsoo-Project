import React from "react";
import {
  userInfoDispatchContext,
  userInfoStateContext,
} from "../Context/UserInfoContext";

export const useUserInfoState = () => {
  const state = React.useContext(userInfoStateContext);
  if (!state) throw new Error("Cannot find userInfoProvider");
  return state;
};

export const useUserInfoDispatch = () => {
  const dispatch = React.useContext(userInfoDispatchContext);
  if (!dispatch) throw new Error("Cannot find userInfoProvider");
  return dispatch;
};
