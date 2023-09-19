import { userInfo, actionType } from "../types/contextUserInfo";

const reducer = (state: userInfo, action: actionType): userInfo => {
  switch (action.type) {
    case "AUTH":
      console.log(state, "state");
      console.log(action, "action");
      return {
        ...state,
        accessToken: action.accessToken,
        checkIsSignIn: true,
      };
    case "SET_USERINFO":
      return {
        ...state,
        id: action.id,
        image: action.image,
        introduction: action.introduction,
        nickName: action.nickName,
      };
    default:
      return state;
  }
};

export default reducer;
