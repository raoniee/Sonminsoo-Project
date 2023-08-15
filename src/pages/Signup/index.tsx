import React, { useReducer, useState } from "react";
import Terms from "./Terms";
import EmailCertification from "./EmailCertification";
import EnterMembersInfo from "./EnterMembersInfo";
import SignUpComplete from "./SignUpComplete";

const Signup = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [emailAuthValidState, setemailAuthValidState] = useState(true);

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

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const type = e?.currentTarget.dataset.signupstep
      ? e.currentTarget.dataset.signupstep
      : "";

    if (type === "complete") {
      console.log("todo:nav login page");
    }
    dispatch(type);
  };
  return (
    <div>
      <h1>Step</h1>
      {signupStep === "terms" && (
        <>
          <Terms setAllChecked={setAllChecked} allChecked={allChecked} />
          <input
            type="button"
            data-signupstep={signupStep}
            onClick={handleClick}
            value="다음"
            disabled={!allChecked}
          />
        </>
      )}
      {signupStep === "authEmail" && (
        <>
          <EmailCertification setemailAuthValidState={setemailAuthValidState} />
          <input
            type="button"
            data-signupstep={signupStep}
            onClick={handleClick}
            value="다음"
            disabled={emailAuthValidState}
          />
        </>
      )}
      {signupStep === "addMemberInfo" && (
        <>
          <EnterMembersInfo />
          <input
            type="button"
            data-signupstep={signupStep}
            onClick={handleClick}
            value="회원가입 완료"
            disabled={emailAuthValidState}
          />
        </>
      )}
      {signupStep === "complete" && (
        <>
          <SignUpComplete />
          <input
            type="button"
            data-signupstep={signupStep}
            onClick={handleClick}
            value="로그인 하러가기"
            disabled={emailAuthValidState}
          />
        </>
      )}
    </div>
  );
};
export default Signup;
