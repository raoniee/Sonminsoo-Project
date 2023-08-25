import * as S from "./style";
import test from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
const BucketItem = () => {
  return (
    <S.BucketItemContainer>
      <S.BucketItemImage $url={test} />
    </S.BucketItemContainer>
  );
};
export default BucketItem;
