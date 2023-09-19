import EmailCertification from "../components/SignUp/EmailCertification";
import EnterMembersInfo from "../components/SignUp/EnterMembersInfo";
import SignUpComplete from "../components/SignUp/SignUpComplete";
import Terms from "../components/SignUp/Terms";
import Signup from "../pages/Signup/Signup";

export const SignupRouter = {
  path: "signup",
  element: <Signup />,
  children: [
    { path: "", element: <Terms /> },
    { path: "emailCertification", element: <EmailCertification /> },
    { path: "enterMembersInfo", element: <EnterMembersInfo /> },
    { path: "signUpComplete", element: <SignUpComplete /> },
  ],
};
