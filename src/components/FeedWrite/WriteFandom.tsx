import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import * as S from "./style/WriteFandom.style";
import dropdown from "../../assets/images/svg/ic-arrow-down-14.svg";

type FeedWriteProps = {
  $updatePage: boolean;
};

const FandomStyles = ($updatePage: boolean) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#f6f6f6",
    border: "1px solid #e8e8e8",
    width: "100%",
    height: "50px",
    boxSizing: "border-box",
    margin: "16px 0",
    borderRadius: "8px",
    fontFamily: "Pretendard-Medium",
    fontSize: "16px",
    paddingLeft: "16px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#f6f6f6",
    color: "#1D1B20",
    margin: "0",
    height: "50",
    padding: "16px",
    borderBottom: "1px solid #E8E8E8",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: $updatePage ? "#BDBDBD" : "#1D1B20",
  }),
});

const options = [
  { value: "꾹이의 모든 것", label: "꾹이의 모든 것" },
  { value: "카시오페아", label: "카시오페아" },
  { value: "소녀시대짱짱", label: "소녀시대짱짱" },
];

const WriteFandom: React.FC<FeedWriteProps> = ({ $updatePage }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
    console.log(option);
  };
  return (
    <S.WritingFandom>
      <S.WritingFandomText>작성 팬덤</S.WritingFandomText>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        styles={FandomStyles($updatePage)}
        placeholder="팬덤을 선택해주세요."
        isDisabled={$updatePage}
      />
      {/* <S.WritingFandomSelect $updatePage={$updatePage}>
          꾹이의 모든 것
        </S.WritingFandomSelect> */}
      {/* <S.WritingFandomIcon src={dropdown} $updatePage={$updatePage} /> */}
    </S.WritingFandom>
  );
};
export default WriteFandom;
