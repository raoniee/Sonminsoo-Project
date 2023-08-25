import React, { useContext } from "react";
import styled from "styled-components";
import edit from "../../assets/images/svg/ic-edit.svg";
import setting from "../../assets/images/svg/ic-settings.svg";
import logo from "../../assets/images/svg/logo.svg";
import * as S from "./style/FeedHeaderBar.style";
import { useNavigate } from "react-router-dom";

const FeedHeaderBar = () => {
  const navigation = useNavigate();

  const moveWriteFeed = () => {
    navigation("/feedwrite", { state: { isUpdate: false } });
  };
  return (
    <S.Container>
      <S.Logo src={logo}></S.Logo>
      <S.Icons>
        <S.Icon
          src={edit}
          onClick={() => {
            moveWriteFeed();
          }}
        />
        <S.Icon src={setting} />
      </S.Icons>
    </S.Container>
  );
};

export default FeedHeaderBar;
