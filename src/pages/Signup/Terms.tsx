import { useState, useEffect } from "react";
import styled from "styled-components";
import testSvg from "../../assets/images/svg/1801287.svg";

const Wrapper = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.span`
  margin-left: 10px;
  color: #666;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  margin-right: 5px;
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
    <Wrapper>
      <Title>이용약관 동의</Title>
      <SubTitle>정의로운 손민수 이용을 위해 약관에 동의해주세요</SubTitle>
      <Checkbox
      // defaultChecked={allChecked}
      // checked={infoAgreement && pledge}
      // onClick={handleAllCheck}
      />
      <CheckboxLabel>전체동의</CheckboxLabel>
      <Checkbox
        // checked={infoAgreement}
        onClick={() => setInfoAgreement(!infoAgreement)}
      />
      <CheckboxLabel>개인정보 수집 및 이용 동의(필수)</CheckboxLabel>
      <Checkbox
        // checked={pledge}
        onClick={() => {
          setPledge(!pledge);
        }}
      />
      <CheckboxLabel>정의로운 손민수 십계명 서약(필수)</CheckboxLabel>
    </Wrapper>
  );
};
export default Terms;
