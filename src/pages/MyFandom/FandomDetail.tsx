import * as S from "./style/FandomDetail.style";

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axios from "../../api/axios";

/////////// 팬덤 디테일 import ///////////
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import Notice from "../../components/MyFandom/Notice";

import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
import useGetToken from "../../hooks/useGetToken";
/////////// 팬덤 타입 ///////////
type Fandom = {
  fandomName: string;
  id: number;
  lastChatTime: null;
  memberLength: number;
  image: string;
  isAdmin: boolean;
  isSubscribe: boolean;
};
/////////// 팬덤 타입 ///////////

const FandomDetail: React.FC = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { fandomId } = useParams();
  const token = useGetToken();
  const api = token ? axiosPrivate : axios;

  /////////// 팬덤 디테일 스테이트 ///////////
  const [data, setData] = useState<Fandom>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);

  /////////// 팬덤 디테일 스테이트 ///////////

  const [onAlert, setOnAlert] = useState<boolean>(false);
  /////////// 피드 스테이트 ///////////

  const initDataGet = async () => {
    try {
      const res = await api.get(`fandoms/${fandomId}`);
      setData(res.data.data);
      setIsAdmin(res.data.data.isAdmin);
      setIsSubscribe(res.data.data.isSubscribe);
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleJoinButtonClick = async () => {
    if (token) {
      try {
        await axiosPrivate.put(`/fandoms/${fandomId}/subscribe`);
        initDataGet();
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      setOnAlert(true);
    }
  };

  const handleLoginAlertClick = async () => {
    setOnAlert(false);
    navigate("/login");
  };

  const handleRemoveButtonClick = async () => {
    var result = window.confirm("정말 이 팬덤을 떠날거야? ㅜㅜ ");
    if (result) {
      alert("아쉽지만 다음에 또 봐!!");
      try {
        await axiosPrivate.put(`/fandoms/${fandomId}/subscribe`);
        initDataGet();
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      alert("앞으로도 함께 손민수 하자!!");
    }
  };

  const renderJoinButton = () => {
    if (!isAdmin && !isSubscribe) {
      return (
        <S.JoimBtn onClick={handleJoinButtonClick}>
          팬덤 가입
          {onAlert && (
            <AppAlertModal
              title="로그인하기"
              content="로그인하시겠습니까?"
              yesContent="로그인"
              yesClickHandler={handleLoginAlertClick}
              setModalOpen={setOnAlert}
            />
          )}
        </S.JoimBtn>
      );
    } else if (!isAdmin && isSubscribe) {
      return (
        <S.JoimBtn onClick={handleRemoveButtonClick}>
          팬덤 탈퇴
          {onAlert && (
            <AppAlertModal
              title="탈퇴하기"
              content="탈퇴하시겠습니까?"
              yesContent="탈퇴"
              yesClickHandler={handleRemoveButtonClick}
              setModalOpen={setOnAlert}
            />
          )}
        </S.JoimBtn>
      );
    } else if (isAdmin) {
      return <S.JoimBtn onClick={handleUpdateButtonClick}>팬덤 편집</S.JoimBtn>;
    }
  };

  const handleUpdateButtonClick = () => {
    navigate(`updatefandom/${fandomId}`);
  };

  useEffect(() => {
    initDataGet();
  });

  return (
    <>
      <S.Container>
        <S.HeaderBox>
          <HeaderBar BackButton={true} />
          <S.Img src={data?.image} alt="API Img" />
          <S.FandomName>{data?.fandomName}</S.FandomName>
          <S.FandomMember>멤버 {data?.memberLength}</S.FandomMember>{" "}
          <S.FandomJoinBox>{renderJoinButton()}</S.FandomJoinBox>
        </S.HeaderBox>
        <Notice noticeId={fandomId} />
      </S.Container>
      <FooterNavBar />
    </>
  );
};
export default FandomDetail;
