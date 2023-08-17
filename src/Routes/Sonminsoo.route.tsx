<<<<<<< HEAD
import Signup from "../pages/Signup";

export const SonminsooRouter = {
  path: "minsooItem",
  element: <Signup />, //손민수템 컴포넌트
=======
import Main from "../pages/Main";

export const SonminsooRouter = {
  path: "minsooItem",
  element: <Main />, //손민수템 컴포넌트
>>>>>>> 415acc6ca9861192fec0b31a773fb2f812f86d36
  children: [
    // { path: "details", element: <Terms /> }, //손민수템 상세보기
    //   { path: "details", element: <Terms /> }, //손민수템 의뢰
  ],
};
