import React, { useState } from "react";
import * as S from "../style/RequestAnswerRegister.style";
import link from "../../../assets/images/svg/ic-link.svg";
import BTN from "../BTN";
import LinkAttachItem from "../LinkAttachItem";
import WhiteSpaceBTN from "../WhiteSpaceBTN";
import RequestLinkRegister from "./RequestLinkRegister";

const RequestAnswerRegister: React.FC = () => {
  const [modalclick, setModalClick] = useState(false);

  return (
    <>
      {/* <WhiteSpaceBTN /> */}
      <S.Wrap>
        <S.LinkContents>
          <S.LinkTitle>링크</S.LinkTitle>
          <S.LinkDesc>최대 9개의 링크 업로드 가능</S.LinkDesc>
          <S.LinkBox>
            <S.LinkRegister
              onClick={() => {
                setModalClick(true);
              }}
            >
              <S.LinkSVG src={link} />
              <S.LinkRegisterLabel>링크등록</S.LinkRegisterLabel>
            </S.LinkRegister>
            {/* <LinkAttachItem /> */}
          </S.LinkBox>
        </S.LinkContents>
        <BTN />
      </S.Wrap>
      {modalclick && <RequestLinkRegister setClick={setModalClick} />}
    </>
  );
};

export default RequestAnswerRegister;
