import { styled } from "styled-components";
import * as S from "./style";
import BucketItem from "./BucketItem";
const BucketListModal = () => {
  return (
    <S.BucketListModalContainer>
      <S.ModalContentContainer>
        <S.BucketListTitle>버킷 리스트 템 추가</S.BucketListTitle>
        <S.BucketListsContainer>
          <BucketItem />
        </S.BucketListsContainer>
        <S.AddBucketList type="button">추가 하기</S.AddBucketList>
      </S.ModalContentContainer>
    </S.BucketListModalContainer>
  );
};
export default BucketListModal;
