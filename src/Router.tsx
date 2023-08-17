import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
<<<<<<< HEAD
import Missing from "./pages/Missing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import Terms from "./pages/Signup/Terms";
import EmailCertification from "./pages/Signup/EmailCertification";
import EnterMembersInfo from "./pages/Signup/EnterMembersInfo";
import SignUpComplete from "./pages/Signup/SignUpComplete";
=======

>>>>>>> 415acc6ca9861192fec0b31a773fb2f812f86d36
import {
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
} from "./Routes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "home",
<<<<<<< HEAD
    element: <Login />, //홈 화면 컴포넌트
  },
  {
    path: "hotFandom",
    element: <Login />, //타오르는 팬덤 컴포넌트
  },
  { path: "login", element: <Login /> },
  {
    path: "fandom/:fandomId",
    element: <Signup />, //팬덤 상세보기 컴포넌트
=======
    element: <Main />, //홈 화면 컴포넌트
  },
  {
    path: "hotFandom",
    element: <Main />, //타오르는 팬덤 컴포넌트
  },
  { path: "login", element: <Main /> },
  {
    path: "fandom/:fandomId",
    element: <Main />, //팬덤 상세보기 컴포넌트
>>>>>>> 415acc6ca9861192fec0b31a773fb2f812f86d36
  },
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
]);

export default Router;
