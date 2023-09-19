import React from "react";
import { styled } from "styled-components";
import check from "../../assets/images/svg/ic-signup-check.svg";

const Wrap = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`;
const Check = styled.img`
  width: 12px;
  height: 12px;
`;
const Number = styled.div<{ active: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  color: ${(props) => (props.active === "true" ? "#fff" : "#B0B0B0")};
  background: ${(props) => (props.active === "true" ? "#6138F8" : "#EBEEF2")};
  padding-top: 1px;
`;
const LineBlue = styled.div`
  width: 15px;
  height: 1px;
  background: #6138f8;
`;
const LineGray = styled.div`
  width: 15px;
  height: 1px;
  background: #ebeef2;
`;

const SignUpHeader2 = () => {
  return (
    <Wrap>
      <Number active={"true"}>
        <Check src={check} />
      </Number>
      <LineBlue></LineBlue>
      <Number active={"true"}>2</Number>
      <LineGray></LineGray>
      <Number active={"false"}>3</Number>
    </Wrap>
  );
};

export default SignUpHeader2;
