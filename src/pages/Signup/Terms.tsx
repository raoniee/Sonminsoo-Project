import { useState, useEffect } from "react";
import styled from "styled-components";
import testSvg from "../../assets/images/svg/1801287.svg";
import checkIcon from "../../assets/images/svg/Exclude.svg";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

const Container = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 12px;
`;

const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
  margin-bottom: 37px;
`;

const CheckboxLabel = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #666;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  margin-right: 5px;
  width: 18px;
  height: 18px;
  border: 1px solid #ebeef2;
  border-radius: 2px;
  &:checked {
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`;

type Props = {
  allChecked: boolean;
  setAllChecked: (value: boolean) => void;
};

const Terms = () => {
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [pledge, setPledge] = useState(false);

  // const handleAllCheck = () => {
  //   if (infoAgreement && pledge) {
  //     setAllChecked(true);
  //   }
  //   if (allChecked) {
  //     setAllChecked(false);
  //     setInfoAgreement(false);
  //     setPledge(false);
  //   } else {
  //     setAllChecked(true);
  //     setInfoAgreement(true);
  //     setPledge(true);
  //   }
  // };

  return (
    <Container>
      {/* <PageHeader totalPages={3} currentPage={1} /> */}
      <Agreement>이용약관 동의</Agreement>
      <SubAgreement>
        정의로운 손민수 이용을 위해 <br /> 약관에 동의해주세요
      </SubAgreement>
      <CheckboxDiv>
        <Checkbox
          checked={infoAgreement}
          onChange={() => setInfoAgreement(!infoAgreement)}
        />
        <CheckboxLabel>전체동의</CheckboxLabel>
      </CheckboxDiv>
      <CheckboxDiv>
        <Checkbox
          // checked={pledge}
          onClick={() => {
            setPledge(!pledge);
          }}
        />
        <CheckboxLabel>개인정보 수집 및 이용 동의(필수)</CheckboxLabel>
        <button>
          <Link to="/signupAgreement"></Link>
        </button>
      </CheckboxDiv>
      <CheckboxDiv>
        <Checkbox
          // checked={pledge}
          onClick={() => {
            setPledge(!pledge);
          }}
        />
        <CheckboxLabel>정의로운 손민수 십계명 서약(필수)</CheckboxLabel>
        <button>
          <Link to="/"></Link>
        </button>
      </CheckboxDiv>
    </Container>
  );
};
export default Terms;
