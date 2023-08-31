import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";
import * as S from "./style/FeedHeader.style";

export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItem[];
  groupName: string;
  artistName: string;
  image: string;
  tags: string[];
  comments: number;
};

type SonminsuItem = {
  id: number;
  originUrl: string;
  imgUrl: string;
  title: string;
  price: number | string;
};

export type FeedDataProps = {
  feedData: Data;
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const FeedHeader: React.FC<FeedDataProps> = ({
  feedData,
  setIsFeedDelete,
  setFeedId,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const token = useSelector(({ auth }) => auth.accessToken);
  const [userId, setUserId] = useState<number | undefined>();
  useEffect(() => {
    fetchUser();
    console.log(userId);
  }, []);

  const handleMoreClick = () => {
    if (token) {
      setIsFeedDelete(true);
      setFeedId(feedData.id);
    }
  };
  const fetchUser = async () => {
    try {
      const response = await axiosPrivate.get("/profile");
      setUserId(response.data.data.id);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <S.FeedHeaderContainer>
      {feedData && feedData.author ? (
        <>
          <S.Profile
            src={feedData.author.image}
            onClick={() => {
              if (token) navigate(`/mypage/${feedData.author.id}`);
            }}
          />
          <S.HeaderContent>
            <S.Nickname>{feedData.author.nickName}</S.Nickname>
            <S.ContentWrap>
              <S.FeedName>{feedData.fandom.fandomName}</S.FeedName>
              <S.Time>
                {feedData.createdAt
                  ? detailDate(feedData.createdAt)
                  : "시간 정보 없음"}
              </S.Time>
            </S.ContentWrap>
          </S.HeaderContent>
          {userId === feedData.author.id && (
            <S.MoreBtn src={more} onClick={handleMoreClick} />
          )}
        </>
      ) : null}
    </S.FeedHeaderContainer>
  );
};
export default FeedHeader;
