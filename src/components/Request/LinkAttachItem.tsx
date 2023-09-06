import React from "react";
import * as S from "./style/LinkAttachItem.style";
import x from "../../assets/images/svg/ic-x.svg";
import { LinkItemType } from "../../types/request";
import { useNavigate } from "react-router-dom";

const LinkAttachItem: React.FC<LinkItemType> = ({
  itemId,
  deletevalue,
  itemImg,
  itemPrice,
  itemName,
  itemUrl,
  deleteclick,
}) => {
  const navigation = useNavigate();

  return (
    <S.Wrap
      onClick={() => {
        navigation(`/minsooItem/details/${itemId}`);
      }}
    >
      <S.AttachImg src={itemImg} />
      {deletevalue && <S.Delete src={x} onClick={deleteclick} />}
      <S.AttachTitle>{itemName}</S.AttachTitle>
      <S.AttachPrice>{itemPrice}</S.AttachPrice>
    </S.Wrap>
  );
};

export default LinkAttachItem;
