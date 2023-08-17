<<<<<<< HEAD
import Signup from "../pages/Signup";
import EmailCertification from "../pages/Signup/EmailCertification";
import EnterMembersInfo from "../pages/Signup/EnterMembersInfo";
import SignUpComplete from "../pages/Signup/SignUpComplete";
import Terms from "../pages/Signup/Terms";

export const SignupRouter = {
  path: "signup",
  element: <Signup />,
  children: [
    { path: "", element: <Terms /> },
    { path: "emailCertification", element: <EmailCertification /> },
    { path: "enterMembersInfo", element: <EnterMembersInfo /> },
    { path: "signUpComplete", element: <SignUpComplete /> },
=======
import Main from "../pages/Main";

export const SignupRouter = {
  path: "signup",
  element: <Main />,
  children: [
    { path: "terms", element: <Main /> },
    { path: "emailCertification", element: <Main /> },
    { path: "enterMembersInfo", element: <Main /> },
    { path: "signUpComplete", element: <Main /> },
>>>>>>> 415acc6ca9861192fec0b31a773fb2f812f86d36
  ],
};
