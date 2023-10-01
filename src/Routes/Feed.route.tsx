import { RouteObject } from "react-router-dom";
import Feed from "../pages/Feed/FeedList";
import FeedDetail from "../components/Feed/FeedDetail";
// import FeedWrite from "../pages/FeedWrite/FeedWrite";

export const FeedRouter: RouteObject = {
  path: "feeds",
  element: <Feed />, //피드 리스트 컴포넌트
  children: [
    {
      path: ":feedId",
      element: <FeedDetail />,
    },
    // { path: "write", element: <FeedWrite /> },
  ],
};
