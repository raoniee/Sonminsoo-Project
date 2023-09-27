import React from "react";

import * as S from "./style/PopularFandomBoard.style";

import ContentHeader from "./ContentHeader";
import PopularFandomList from "./PopularFandomList";
import { Fandoms } from "../../types/Home.type";

const PopularFandomBoard: React.FC<{
  hotFandom: Fandoms;
}> = ({ hotFandom }) => {
  return (
    <S.PopularFandomBoarContainer>
      <ContentHeader nav={"/hotfandom"} name={"❤️‍🔥 HOT 타오르는 팬덤"} />
      <PopularFandomList hotFandom={hotFandom} />
    </S.PopularFandomBoarContainer>
  );
};
export default PopularFandomBoard;
