import SonminsooItem from "../pages/SonminsooItem";
import SonminsooItemList from "../pages/SonminsooItem/SonminsooItemList";

export const SonminsooRouter = {
  path: "minsooItem",
  element: <SonminsooItem />, //손민수템 컴포넌트
  children: [
    { path: "", element: <SonminsooItemList /> }, //손민수템 상세보기
  ],
};
