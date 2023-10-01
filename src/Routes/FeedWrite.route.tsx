import FeedWrite from "../pages/FeedWrite/FeedWrite";
import NewFeed from "../components/FeedWrite/FeedWrite";

export const FeedWriteRouter = {
  path: "feedwrite",
  element: <FeedWrite />,
  children: [{ path: "", element: <NewFeed /> }],
};
