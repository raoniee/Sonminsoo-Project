import React from "react";
import styled from "styled-components";
import edit from "../../assets/images/svg/ic-edit.svg";
import setting from "../../assets/images/svg/ic-settings.svg";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logo = styled.div`
  padding: 15px 16px;
  font-size: 20px;
  font-weight: 700;
`;

const Icons = styled.div`
  display: flex;
  padding: 13px 13px;
  > div:not(:last-child) {
    margin-right: 12px;
  }
`;

const Icon = styled.div<IconProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: ${({ background }) => `url(${background})`} no-repeat center
    center;
  background-size: contain;
`;
type IconProps = {
  background?: string;
};
const StatusBar = () => {
  return (
    <Container>
      <Logo>로고</Logo>
      <Icons>
        <Icon background={edit} />
        <Icon background={setting} />
      </Icons>
    </Container>
  );
};

export default StatusBar;
