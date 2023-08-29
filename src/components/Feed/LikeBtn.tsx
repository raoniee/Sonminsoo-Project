import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import * as S from "./style/LikeBtn.style";
import heart from "../../assets/images/svg/ic-heart.svg";
import fillheart from "../../assets/images/svg/fillheart.svg";
type LikeBtnProps = {
  feedId: number;
};
const LikeBtn: React.FC<LikeBtnProps> = ({ feedId }) => {
  const [likeCount, setLikeCount] = useState<number>(23);
  const [liked, setLiked] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const toggleLike = async (feedId: number) => {
    try {
      const response = await axiosPrivate.put(`/feeds/${feedId}/like`);
      setLiked(!liked);
      if (liked) {
        setLikeCount((prevCount) => prevCount - 1);
      } else {
        setLikeCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <S.LikeWrap>
      <S.LikeIcon
        src={liked ? fillheart : heart}
        onClick={() => toggleLike(feedId)}
      ></S.LikeIcon>
      <S.LikeNumber>{likeCount}</S.LikeNumber>
    </S.LikeWrap>
  );
};

export default LikeBtn;
