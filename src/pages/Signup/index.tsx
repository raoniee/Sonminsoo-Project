import React, { useReducer } from "react";
import Terms from "./Terms";
import EmailCertification from "./EmailCertification";
import EnterMembersInfo from "./EnterMembersInfo";
import SignUpComplete from "./SignUpComplete";

const Signup = () => {
  const signupReducer = (_: string, action: string): string => {
    if (action === "terms") return "authEmail";
    if (action === "authEmail") return "addMemberInfo";
    if (action === "addMemberInfo") return "complete";
    if (action === "complete") {
      console.log("todo: block next step");
      return "";
    }
    if (action === "") {
      console.log("todo: navigation error page");
      return "";
    }
    return "";
  };
  const [signupStep, dispatch] = useReducer(signupReducer, "terms");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e?.currentTarget.dataset.signupstep
      ? e.currentTarget.dataset.signupstep
      : "";
    dispatch(type);
  };
  return (
    <div>
      <h1>Step</h1>
      {signupStep === "terms" && <Terms />}
      {signupStep === "authEmail" && <EmailCertification />}
      {signupStep === "addMemberInfo" && <EnterMembersInfo />}
      {signupStep === "complete" && <SignUpComplete />}
      <button data-signupstep={signupStep} onClick={handleClick}>
        다음{signupStep}
      </button>
    </div>
  );
};
export default Signup;
