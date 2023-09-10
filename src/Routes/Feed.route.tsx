import { RouteObject } from "react-router-dom";
import Feed from "../pages/Feed/Feed";
import Feeds from "../pages/Feed/Feeds";
// import FeedDetail from "../pages/FeedDetail/FeedDetail";
// import FeedWrite from "../pages/FeedWrite/FeedWrite";

export const FeedRouter: RouteObject = {
  path: "feeds",
  element: <Feed />, //피드 리스트 컴포넌트
  children: [
    { path: "", element: <Feeds /> },
    // { path: "write", element: <FeedWrite /> },
    // { path: ":feedId", element: <FeedDetail /> },
  ],
};
// export const FeedDetailRouter = {
//   path: "feed/:FeedId",
//   element: <FeedDetail />,
// };
