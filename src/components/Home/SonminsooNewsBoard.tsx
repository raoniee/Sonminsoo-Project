import * as S from "./style/SonminsooNewsBoard.style";
import React from "react";
import ContentHeader from "./ContentHeader";
import SonminsooNewsContents from "./SonminsooNewsContents";
import { FeedType } from "../../types/feed";

const SonminsooNewsBoard: React.FC<{ news: FeedType[] }> = ({ news }) => {
  return (
    <>
      <S.SonminsooNewsBoardContainer>
        <ContentHeader nav={"/feeds"} name={"📰 손민수 NEWS"} />
        <S.SonminsooNewsListBox>
          {news.map((item) => (
            <SonminsooNewsContents key={item.id} item={item} />
          ))}
        </S.SonminsooNewsListBox>
      </S.SonminsooNewsBoardContainer>
    </>
  );
};
export default SonminsooNewsBoard;
