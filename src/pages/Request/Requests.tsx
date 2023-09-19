import React, { useEffect, useState } from "react";
import * as S from "./style/Request.style";
import RequestList from "../../components/Request/RequestList";
import documenticon from "../../assets/images/svg/ic-document.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import edit from "../../assets/images/svg/ic-edit.svg";
import Icon from "../../elements/Icon";
import axios from "../../api/axios";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import detailDate from "../../utils/time";
import { useNavigate } from "react-router-dom";
import { RequestsType } from "../../types/request";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
import useGetToken from "../../hooks/useGetToken";

const Requests: React.FC = () => {
  const navigation = useNavigate();
  const token = useGetToken();

  const [requestdata, setRequestData] = useState<RequestsType[]>([]);
  const [clickform, setClickForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/sonminsu-requests");
      setRequestData(response.data.data);
    } catch (err) {}
  };

  return (
    <>
      <HeaderBar
        BackButton={true}
        title="손민수템 의뢰"
        items={[
          <Icon
            key="repuest"
            src={edit}
            onClick={() => {
              if (!token) {
                document.body.style.overflow = "hidden";
                setClickForm(true);
              } else {
                navigation(`/requests/form`);
              }
            }}
          />,
        ]}
        color="#fff"
      />
      <S.Wrap>
        {requestdata.length === 0 ? (
          <S.NoRequest>
            <S.NoRequestIcon src={documenticon} />
            <S.NoRequestDesc>새 의뢰를 작성해주세요!</S.NoRequestDesc>
          </S.NoRequest>
        ) : (
          requestdata.map((request) => (
            <RequestList
              img={request.image}
              title={request.title}
              username={request.user.nickName}
              date={detailDate(request.createdAt)}
              userid={request.user.id}
              requestid={request.id}
              key={request.id}
            />
          ))
        )}
      </S.Wrap>
      {clickform && (
        <AppAlertModal
          title="로그인하기"
          content="로그인하시겠습니까?"
          yesContent="로그인"
          yesClickHandler={() => {
            navigation(`/login`);
          }}
          setModalOpen={setClickForm}
        />
      )}
      <FooterNavBar />
    </>
  );
};

export default Requests;
