<<<<<<< HEAD
import Signup from "../pages/Signup";

export const ChattingRouter = {
  path: "chatting",
  element: <Signup />, //채팅 컴포넌트
=======
import Main from "../pages/Main";

export const ChattingRouter = {
  path: "chatting",
  element: <Main />, //채팅 컴포넌트
>>>>>>> 415acc6ca9861192fec0b31a773fb2f812f86d36
  children: [
    // { path: "room", element: <EmailCertification /> }, //채팅방
  ],
};
