import { useState, useEffect } from "react";

const Terms = () => {
  const [checkList, setCheckList] = useState([""]);
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [pledge, setPledge] = useState(false);

  return (
    <div>
      <h1>이용약관 동의</h1>
      <h2>정의로운 손민수 이용을 위해 약관에 동의해주세요</h2>
      <input
        type="checkbox"
        checked={checkList.length === 2 ? true : false}
        // onClick={() => setIsAllChecked(!isAllChecked)}
      />
      <span>전체동의</span>
      <input
        type="checkbox"
        checked={infoAgreement}
        onClick={() => setInfoAgreement(!infoAgreement)}
      />
      <span>개인정보 수집 및 이용 동의(필수)</span>&#8250;
      <input
        type="checkbox"
        checked={pledge}
        onClick={() => {
          setPledge(!pledge);
        }}
      />
      <span>정의로운 손민수 십계명 서약(필수)</span>&#8250;
    </div>
  );
};
export default Terms;
