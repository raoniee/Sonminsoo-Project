import React from "react";

import * as S from "./style/PopularFandomList.style";

import { Fandoms } from "../../types/Home.type";

const PopularFandomList: React.FC<{
  hotFandom: Fandoms;
}> = ({ hotFandom }) => {
  const firstRank = hotFandom[0] || {};
  const restRank = hotFandom.slice(1);

  return (
    <S.PopularFandomListContainer>
      <S.PopularFandomImg>
        <S.Img src={firstRank?.image} />
        <S.NumberOneBox>
          <S.NumberOneText>1</S.NumberOneText>
          <S.NumberOneFandomNameText>
            {firstRank.fandomName}
          </S.NumberOneFandomNameText>
        </S.NumberOneBox>
      </S.PopularFandomImg>

      {restRank.map((item) => (
        <S.NextNumberFandomBox key={item.id}>
          <S.RankingText>{item.rank}</S.RankingText>
          <S.FandomNameText>{item?.fandomName}</S.FandomNameText>
        </S.NextNumberFandomBox>
      ))}
    </S.PopularFandomListContainer>
  );
};
export default PopularFandomList;
