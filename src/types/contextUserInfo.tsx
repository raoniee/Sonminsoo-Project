export type userInfo = {
  accessToken: string;
  checkIsSignIn: boolean;
  id: number;
  image: string;
  introduction: string;
  nickName: string;
};
export type actionType =
  | { type: "AUTH"; accessToken: string }
  | {
      type: "SET_USERINFO";
      id: number;
      image: string;
      introduction: string;
      nickName: string;
    };
