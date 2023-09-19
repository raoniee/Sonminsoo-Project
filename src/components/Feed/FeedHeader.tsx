import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";
import * as S from "./style/FeedHeader.style";
import { FeedHeaderProps } from "../../types/feed";
import useGetToken from "../../hooks/useGetToken";

const FeedHeader: React.FC<FeedHeaderProps> = ({
  feedId,
  author,
  fandom,
  createdAt,
  setIsFeedDelete,
  setFeedId,
}) => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [userId, setUserId] = useState<number | undefined>();
  const token = useGetToken();
  useEffect(() => {
    fetchUser();
  }, []);
  //TODO: 유저 정보 새로고침 시 다시 받아와야 하는지 체크
  const fetchUser = async () => {
    try {
      const response = await axiosPrivate.get("/profile");
      setUserId(response.data.data.id);
    } catch (error) {}
  };
  const handleMoreClick = () => {
    if (token) {
      setIsFeedDelete(true);
      setFeedId(feedId);
    }
  };
  return (
    <S.FeedHeaderContainer>
      <S.Profile
        src={author.image}
        onClick={() => {
          if (token) navigate(`/mypage/${author.id}`);
        }}
      />
      <S.HeaderContent>
        <S.Nickname>{author.nickName}</S.Nickname>
        <S.ContentWrap>
          <S.FeedName>{fandom.fandomName}</S.FeedName>
          <S.Time>
            {createdAt ? detailDate(createdAt) : "시간 정보 없음"}
          </S.Time>
        </S.ContentWrap>
      </S.HeaderContent>
      {userId === author.id && (
        <S.MoreBtn src={more} onClick={handleMoreClick} />
      )}
    </S.FeedHeaderContainer>
  );
};
export default FeedHeader;
