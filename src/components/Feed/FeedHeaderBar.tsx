import React, { useState, useRef } from "react";
import styled from "styled-components";
import edit from "../../assets/images/svg/ic-edit.svg";
import setting from "../../assets/images/svg/ic-settings.svg";
import logo from "../../assets/images/svg/logo.svg";
import * as S from "./style/FeedHeaderBar.style";
import { useNavigate } from "react-router-dom";

const FeedHeaderBar = () => {
  const navigation = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 선택된 이미지의 URL을 저장하기 위한 상태
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleEditIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Non-null assertion operators
    const imageUrl = URL.createObjectURL(file!);

    if (file) {
      // 파일을 선택했을 때 수행할 작업
      setSelectedImage(imageUrl);
      navigation("/feedwrite", {
        state: { isUpdate: false, selectedImage: imageUrl },
      });
    }
  };

  return (
    <S.Container>
      <S.Logo src={logo}></S.Logo>
      <S.Icons>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <S.Icon src={edit} onClick={handleEditIconClick} />
        <S.Icon src={setting} />
      </S.Icons>
    </S.Container>
  );
};

export default FeedHeaderBar;
