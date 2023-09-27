import * as S from "./style/RecommendItemBoard.style";
import React from "react";
import ContentHeader from "./ContentHeader";
import RecommendItem from "./RecommendItem";
import { sonminsooItemInfo } from "../../pages/SonminsooItem/types/SonminsooItem.type";
import { bucketList } from "../common/BucketListModal/types/BucketListModal.type";

const RecommendItemBoard: React.FC<{
  setModalView: React.Dispatch<React.SetStateAction<boolean>>;
  setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
  setSelectItem: React.Dispatch<React.SetStateAction<number>>;
  sonMinSoosData: sonminsooItemInfo[];
}> = ({ setModalView, setBucketList, setSelectItem, sonMinSoosData }) => {
  return (
    <S.RecommendItemBoardContainer>
      <ContentHeader nav={"/minsooItem"} name={"📦 추천 손민수템"} />
      <S.RecommendItemListBox>
        {sonMinSoosData.map((item) => (
          <RecommendItem
            key={item.id}
            item={item}
            setModalView={setModalView}
            setBucketList={setBucketList}
            setSelectItem={setSelectItem}
          />
        ))}
      </S.RecommendItemListBox>
    </S.RecommendItemBoardContainer>
  );
};
export default RecommendItemBoard;
