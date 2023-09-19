import React, { useState } from "react";

import * as S from "./style/Home.style";

import MyFandomBoard from "../../components/Home/MyFandomBoard";
import SonminsooNewsBoard from "../../components/Home/SonminsooNewsBoard";
import RecommendItemBoard from "../../components/Home/RecommendItemBoard";
import PopularFandomBoard from "../../components/Home/PopularFandomBoard";
import HomeHeader from "../../components/Home/HomeHeader";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import useGetToken from "../../hooks/useGetToken";
import axios, { axiosPrivate } from "../../api/axios";
import { sonminsooItemInfo } from "../SonminsooItem/types/SonminsooItem.type";
type bucketList = {
  id: number;
  img?: string;
  bucketName: string;
}[];
const Home: React.FC = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();

  const token = useGetToken();
  const api = token ? axiosPrivate : axios;
  const [data, setData] = useState<sonminsooItemInfo[]>([]);

  const initDataGet = async () => {
    //TODO: 혜정님 RecommendItemBoard의 initDataGet를 여기서 선언해주고 props로 내려서 RecommendItemBoard에서 사용해주세요
    try {
      const res = await api.get("/sonminsu-items");
      setData(res.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

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
          fetchData={initDataGet}
        />
      )}
    </S.Container>
  );
};
export default Home;
