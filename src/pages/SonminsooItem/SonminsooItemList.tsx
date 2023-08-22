import { styled } from "styled-components";
import SonMinsooItemInfo from "./SonMinsooItemInfo";

const SonminsooItemListContainer = styled.div`
  width: 358px;
  margin: 21px auto 0 auto;
  padding: 0;
`;
const SonminsooItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SonminsooItemTitle = styled.div`
  margin-bottom: 5px;
`;

const SonminsooItemList = () => {
  return (
    <SonminsooItemListContainer>
      <SonminsooItemTitle>손민수템</SonminsooItemTitle>
      <SonminsooItemsContainer>
        <SonMinsooItemInfo />
        {/* <SonminsooItemContainer></SonminsooItemContainer> */}
        {/* <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer>
        <SonminsooItemContainer></SonminsooItemContainer> */}
      </SonminsooItemsContainer>
    </SonminsooItemListContainer>
  );
};
export default SonminsooItemList;
