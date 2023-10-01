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
import { Fandoms } from "../../types/Home.type";
import { bucketList } from "../../components/common/BucketListModal/types/BucketListModal.type";
import { FeedType } from "../../types/feed";

const Home: React.FC = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>(0);
  const [fandomsData, setfandomsData] = useState<Fandoms>([]);
  const [newsData, setnewsData] = useState<FeedType[]>([]);
  const [sonminsoosData, setsonminsoosData] = useState<sonminsooItemInfo[]>([]);
  const [hotFandomData, sethotFandomData] = useState<Fandoms>([]);

  const token = useGetToken();
  const api = token ? axiosPrivate : axios;

  useEffect(() => {
    token && fandomsDataGet();
    const fetchAxiosData = async () => {
      await Promise.all([newsDataGet(), sonminsuDataGet(), hotFandomDataGet()]);
    };
    fetchAxiosData();
  }, [token]);

  const fandomsDataGet = async () => {
    try {
      const res = await axiosPrivate.get("/fandoms");
      setfandomsData(res.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const newsDataGet = async () => {
    try {
      const res = await axios.get("/feeds");

      setnewsData(res.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const sonminsuDataGet = async () => {
    try {
      const res = await api.get(`/sonminsu-items?page=1&perPage=6`);
      setsonminsoosData(res.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  const hotFandomDataGet = async () => {
    try {
      const res = await axios.get("fandoms/hot");
      sethotFandomData(res.data.data);
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
          <SonminsooNewsBoard news={newsData} />
          <RecommendItemBoard
            setModalView={setModalView}
            setBucketList={setBucketList}
            setSelectItem={setSelectItem}
            sonMinSoosData={sonminsoosData}
          />
          <PopularFandomBoard hotFandom={hotFandomData} />
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
