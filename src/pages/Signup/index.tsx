import { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface signupContextType {
  email: string;
  setEmail: (value: string) => void;
  setSignupStep: (value: string) => void;
}

export const signupContext = createContext<signupContextType | null>(null);
const Signup = () => {
  const [signupStep, setSignupStep] = useState("terms");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();

  const nextButton = () => {
    if (signupStep === "terms")
      return (
        <input
          type="button"
          value="다음"
          onClick={() => {
            navigation("emailCertification");
            setSignupStep("emailCertification");
          }}
        />
      );
    if (signupStep === "emailCertification")
      return (
        <input
          type="button"
          value="다음"
          onClick={() => {
            navigation("enterMembersInfo");
            setSignupStep("enterMembersInfo");
          }}
        />
      );
    if (signupStep === "enterMembersInfo")
      return (
        <input
          type="button"
          value="다음"
          onClick={() => {
            navigation("signUpComplete");
            setSignupStep("signUpComplete");
          }}
        />
      );
    return;
  };

  return (
    <signupContext.Provider value={{ email, setEmail, setSignupStep }}>
      <div>
        header
        <Outlet />
        {nextButton()}
      </div>
    </signupContext.Provider>
  );
};
export default Signup;
