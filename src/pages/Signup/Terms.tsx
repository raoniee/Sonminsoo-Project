import { useState, useEffect } from "react";
import "../../styles/reset.css";
import styled from "styled-components";
import testSvg from "../../assets/images/svg/1801287.svg";

const Container = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 10px;
`;

const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #666;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  margin-right: 5px;
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
      <Agreement>이용약관 동의</Agreement>
      <SubAgreement>
        정의로운 손민수 이용을 위해 <br /> 약관에 동의해주세요
      </SubAgreement>
      <Checkbox
      // defaultChecked={allChecked}
      // checked={infoAgreement && pledge}
      // onClick={handleAllCheck}
      />
      <CheckboxDiv>
        <Checkbox
          // checked={infoAgreement}
          onClick={() => setInfoAgreement(!infoAgreement)}
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
        {/* <Modal></Modal> */}
      </CheckboxDiv>
      <CheckboxDiv>
        <Checkbox
          // checked={pledge}
          onClick={() => {
            setPledge(!pledge);
          }}
        />
        <CheckboxLabel>정의로운 손민수 십계명 서약(필수)</CheckboxLabel>
        {/* <Modal></Modal> */}
      </CheckboxDiv>
    </Container>
  );
};
export default Terms;
