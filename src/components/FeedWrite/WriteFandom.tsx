import React, { useState } from "react";
import Select from "react-select";
import * as S from "./style/WriteFandom.style";

import { OptionType, FeedWriteFandomProps } from "../../types/feedWrite";

const WriteFandom: React.FC<FeedWriteFandomProps> = ({
  $updatePage,
  fandomOptions,
  setSelectedFandom,
  selectedFandom,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
    if (option) {
      setSelectedFandom(option);
    }
  };
  return (
    <S.WritingFandom>
      <S.WritingFandomText>작성 팬덤</S.WritingFandomText>
      <Select
        value={selectedOption}
        options={fandomOptions}
        styles={S.FandomStyles($updatePage)}
        placeholder={$updatePage ? "팬덤" : "팬덤을 선택해주세요."}
        isDisabled={$updatePage}
        onChange={handleOptionChange}
      />
    </S.WritingFandom>
  );
};
export default WriteFandom;
