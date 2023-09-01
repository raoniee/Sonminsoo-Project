import React, { useState } from "react";

import * as S from "./style/Home.style";

import MyFandomBoard from "../../components/Home/MyFandomBoard";
import SonminsooNewsBoard from "../../components/Home/SonminsooNewsBoard";
import RecommendItemBoard from "../../components/Home/RecommendItemBoard";
import PopularFandomBoard from "../../components/Home/PopularFandomBoard";
import HomeHeader from "../../components/Home/HomeHeader";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
type bucketList = {
  id: number;
  img?: string;
  bucketName: string;
}[];
const Home: React.FC = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();

  return (
    <S.Container>
      <FooterNavBar />
      <S.HomeContainer>
        <S.HomeBgContainer>
          <HomeHeader />
          <MyFandomBoard />
        </S.HomeBgContainer>
        <S.HomeBgFlowerContainer>
          <SonminsooNewsBoard />
          <RecommendItemBoard
            setModalView={setModalView}
            setBucketList={setBucketList}
            setSelectItem={setSelectItem}
          />
          <PopularFandomBoard />
        </S.HomeBgFlowerContainer>
      </S.HomeContainer>
      {modalView && (
        <BucketListModal
          setModalOpen={setModalView}
          bucketList={bucketList}
          itemId={selectItem}
        />
      )}
    </S.Container>
  );
};
export default Home;
