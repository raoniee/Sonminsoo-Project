import { styled } from "styled-components";
import bookMark from "../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookMark from "../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";

const SonminsooItemInfoContainer = styled.div`
  width: 109px;
  height: 178px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px 0;
`;
const TitleContainer = styled.div`
  height: 18px;
  display: flex;
  margin-bottom: 5px;
`;
const ItemImage = styled.div`
  width: 109px;
  height: 109px;
  border: 1px solid black;
  border-radius: 8px;
`;
const ArtistName = styled.div`
  width: max-content;
  display: inline-flex;
  padding: 2px 4px;
  margin: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #dee9ff;
`;

const SonMinsooItemInfo = () => {
  return (
    <SonminsooItemInfoContainer>
      <ItemImage />
      <ArtistName>전정국</ArtistName>
      <TitleContainer>비행사 우주</TitleContainer>
    </SonminsooItemInfoContainer>
  );
};
export default SonMinsooItemInfo;
