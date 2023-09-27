import React, { useEffect, useState } from "react";

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
import { Fandoms } from "./types/Home.type";
import { bucketList } from "../../components/common/BucketListModal/types/BucketListModal.type";

const Home: React.FC = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();
  const [fandomsData, setfandomsData] = useState<Fandoms>([]);
  const [sonminsoosData, setsonminsoosData] = useState<sonminsooItemInfo[]>([]);

  const token = useGetToken();
  const api = token ? axiosPrivate : axios;

  useEffect(() => {
    token && fandomsDataGet();
  }, [token]);

  const fandomsDataGet = async () => {
    try {
      const res = await axiosPrivate.get("/fandoms");
      setfandomsData(res.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const sonminsuDataGet = async () => {
    //TODO: 혜정님 RecommendItemBoard의 initDataGet를 여기서 선언해주고 props로 내려서 RecommendItemBoard에서 사용해주세요
    try {
      const res = await api.get("/sonminsu-items");
      setsonminsoosData(res.data.data);
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
          <MyFandomBoard fandoms={fandomsData} />
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
          fetchData={sonminsuDataGet}
        />
      )}
    </S.Container>
  );
};
export default Home;
