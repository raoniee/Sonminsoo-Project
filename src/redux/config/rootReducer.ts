import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    checkIsSignIn: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.checkIsSignIn = true;
    },
  },
});
export default rootReducer;
export const { setToken } = rootReducer.actions;
