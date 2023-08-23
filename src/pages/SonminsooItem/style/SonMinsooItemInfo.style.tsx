import { styled } from "styled-components";
import bookMark from "../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookMark from "../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";

export const SonminsooItemInfoContainer = styled.div`
  width: 109px;
  height: 178px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px 0;
`;
export const TitleContainer = styled.div`
  height: 18px;
  display: flex;
  margin-bottom: 5px;
`;
export const ItemImage = styled.div`
  width: 109px;
  height: 109px;
  border: 1px solid black;
  border-radius: 8px;
`;
export const ArtistName = styled.div`
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
