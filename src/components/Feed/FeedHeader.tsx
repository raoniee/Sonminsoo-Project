import React from "react";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";
import * as S from "./style/FeedHeader.style";
import { FeedHeaderProps } from "../../types/feed";

const FeedHeader: React.FC<FeedHeaderProps> = ({
  feedId,
  author,
  fandom,
  createdAt,
  setIsFeedDelete,
}) => {
  return (
    <S.FeedHeaderContainer>
      <S.Profile src={author.image} />
      <S.HeaderContent>
        <S.Nickname>{author.nickName}</S.Nickname>
        <S.ContentWrap>
          <S.FeedName>{fandom.fandomName}</S.FeedName>
          <S.Time>
            {createdAt ? detailDate(createdAt) : "시간 정보 없음"}
          </S.Time>
        </S.ContentWrap>
      </S.HeaderContent>
      <S.MoreBtn src={more} onClick={() => setIsFeedDelete(true)} />
    </S.FeedHeaderContainer>
  );
};
export default FeedHeader;
