import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/svg/ic-arrow-left.svg";
import check from "../../assets/images/svg/icon-check.svg";
import allcheck from "../../assets/images/svg/ic-check.svg";
import * as S from "./style/FeedWriteHeader.style";

import { FeedWriteProps } from "../../types/feedWrite";

const FeedWriteHeader: React.FC<FeedWriteProps> = ({
  $updatePage,
  handleHeaderSubmit,
  isFormValid,
  updateFeed,
  moveToFandom,
}) => {
  const navigation = useNavigate();
  const isFandom = () => {
    moveToFandom();
    navigation("/feeds");
  };
  return (
    <S.NewFeedHeader>
      <S.FeedHeaderArrow src={arrow} onClick={isFandom} />
      {$updatePage ? (
        <S.FeedHeaderText>피드 수정</S.FeedHeaderText>
      ) : (
        <S.FeedHeaderText>새 피드 작성</S.FeedHeaderText>
      )}
      <S.FeedHeaderCheck
        src={isFormValid ? allcheck : check}
        onClick={$updatePage ? updateFeed : handleHeaderSubmit}
      />
    </S.NewFeedHeader>
  );
};
export default FeedWriteHeader;
