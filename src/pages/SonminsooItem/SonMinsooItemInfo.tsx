import * as S from "./style/SonMinsooItemInfo.style";
import bookMark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookMark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";
import { useOutletContext } from "react-router-dom";

type bucketList = {
  id: string;
  img: string;
  title: string;
}[];
type sonminsooItemInfo = {
  imgURL: string;
  artistName: string;
  title: string;
  bucket: bucketList;
  price: number;
};
const SonMinsooItemInfo = ({
  imgURL,
  artistName,
  title,
  bucket,
  price,
}: sonminsooItemInfo) => {
  const { setModalView, setBucketList } = useOutletContext<{
    setModalView: React.Dispatch<React.SetStateAction<boolean>>;
    setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
  }>();
  return (
    <S.SonminsooItemInfoContainer
      onClick={() => {
        setBucketList(bucket);
        setModalView(true);
      }}
    >
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
