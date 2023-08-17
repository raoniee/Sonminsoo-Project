<<<<<<< HEAD
import Signup from "../pages/Signup";

export const FeedRouter = {
  path: "feed",
  element: <Signup />, //피드 리스트 컴포넌트
=======
import Main from "../pages/Main";

export const FeedRouter = {
  path: "feed",
  element: <Main />, //피드 리스트 컴포넌트
>>>>>>> 415acc6ca9861192fec0b31a773fb2f812f86d36
  children: [
    //   { path: "details", element: <Terms /> }, //피드 상세보기
  ],
};
