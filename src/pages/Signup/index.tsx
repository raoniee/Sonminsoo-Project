import React, { useReducer } from "react";
import Terms from "./Terms";
import EmailCertification from "./EmailCertification";
import EnterMembersInfo from "./EnterMembersInfo";
import SignUpComplete from "./SignUpComplete";

const Signup = () => {
  const initailizeState: { type: string } = { type: "terms" };
  type signupStepName = { type: string };
  const reducer = (state: signupStepName, action: signupStepName) => {
    switch (action.type) {
      case "terms":
        return <Terms />;
      default:
        console.log("navigation error page");
        return;
    }
  };
  const [signupStep, dispatch] = useReducer(reducer, initailizeState);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: e.currentTarget.dataset.signupStep });
  };
  return (
    <div>
      <h1>Step</h1>
      {signupStep === 1 && <Terms />}
      {signupStep === 2 && <EmailCertification />}
      {signupStep === 3 && <EnterMembersInfo />}
      {signupStep === 4 && <SignUpComplete />}
      <button data-signupStep={signupStep} onClick={handleClick}>
        다음
      </button>
    </div>
  );
};
export default Signup;
