import React, { useEffect, useRef } from "react";
<<<<<<< HEAD:src/components/CloseModal/index.tsx
import styled from "styled-components";
import * as S from "./style/index";
=======
import * as S from "./style/AlertModal.style";

>>>>>>> 196d22e (Chore: 폴더 스타일 구조 변경):src/components/common/AlertModal/AlertModal.tsx
type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  warning?: boolean;
  yesContent: string;
  yesClickHandler: React.MouseEventHandler<HTMLDivElement>;
};
const AlertModal: React.FC<ModalProps> = ({
  setModalOpen,
  title,
  content,
  warning,
  yesContent,
  yesClickHandler,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <S.Overlay>
      <S.ModalContainer ref={modalRef}>
        <S.ModalText>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalContent>{content}</S.ModalContent>
        </S.ModalText>
        <S.ModalBtn>
          <S.ModalNo
            onClick={() => {
              setModalOpen(false);
            }}
          >
            아니오
          </S.ModalNo>
          <S.ModalYes warning={warning} onClick={yesClickHandler}>
            {yesContent}
          </S.ModalYes>
        </S.ModalBtn>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default AlertModal;
