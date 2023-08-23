import * as S from "./style";
import bookMark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookMark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";

type sonminsooItemInfo = {
  imgURL: string;
  artistName: string;
  title: string;
  bucket: string[];
  price: number;
};
const SonMinsooItemInfo = ({
  imgURL,
  artistName,
  title,
  bucket,
  price,
}: sonminsooItemInfo) => {
  return (
    <S.SonminsooItemInfoContainer>
      <S.ItemImage $url={imgURL} />
      <S.ArtistName>{artistName}</S.ArtistName>
      <S.TitleContainer>
        <S.ItemTitle>{title}</S.ItemTitle>
        <S.bookMarkIcon $iconUrl={bookMark} />
      </S.TitleContainer>
      <S.ItemPrice>{price.toLocaleString()}원</S.ItemPrice>
    </S.SonminsooItemInfoContainer>
  );
};
export default SonMinsooItemInfo;
