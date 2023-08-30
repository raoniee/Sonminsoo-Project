import React, { useState } from "react";
import * as S from "./style/MyFollowItem.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollowingItem: React.FC<MyFollowerAndFollowingType> = ({
  id,
  nickName,
  image,
  isFollowing,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [followValue, setFollowValue] = useState(true);

  const clickFollowBTN = async () => {
    setFollowValue(false);

    try {
      const response = await axiosPrivate.put(`/following/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrap>
      <S.FollowImg src={image} />
      {<S.FollowName>{nickName}</S.FollowName>}
      {isFollowing && (
        <S.FollowBTN state={followValue} onClick={clickFollowBTN}>
          {followValue ? "팔로잉" : "팔로우"}
        </S.FollowBTN>
      )}
    </S.Wrap>
  );
};

export default MyFollowingItem;