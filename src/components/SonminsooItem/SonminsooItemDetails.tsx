import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style/SonminsooItemDetails.style";
import HeaderBar from "../common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import bookmark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookmark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";
import BucketListModal from "../common/BucketListModal/BucketListModal";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGetToken from "../../hooks/useGetToken";
import AppAlertModal from "../common/AlertModal/AppAlertModal";
import {
  bucketList,
  sonminsooItemInfo,
} from "../../pages/SonminsooItem/types/SonminsooItem.type";

const SonminsooItemDetails = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();
  const token = useGetToken();
  const axiosPrivate = useAxiosPrivate();
  const api = token ? axiosPrivate : axios;

  const { id } = useParams();
  const navigation = useNavigate();

  const [productInfo, setProductInfo] = useState<sonminsooItemInfo>();
  const [viewLoginAlert, setViewLoginAlert] = useState<boolean>(false);

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  const fetchData = async () => {
    try {
      const { data } = await api.get(`/sonminsu-items/${id}`);
      setProductInfo(data.data);
      console.log("fetchData");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <S.DetailContainer>
      <HeaderBar
        BackButton={true}
        items={[
          <Icon
            src={!!productInfo?.isInMyBucket ? activeBookmark : bookmark}
            key={"bookmark"}
            onClick={() => {
              if (!token) {
                setViewLoginAlert(true);
              }
              !!productInfo?.isInMyBucket
                ? axiosPrivate
                    .put(
                      `/sonminsu-items/${id}/buckets/${productInfo?.isInMyBucket.bucketId}`
                    )
                    .then((res) => {
                      console.log(res, "res!");
                      document.body.style.overflow = "unset";
                      setModalView(false);
                      fetchData();
                    })
                    .catch((err) => {})
                : axiosPrivate
                    .get(`/buckets`)
                    .then(({ data }) => {
                      setSelectItem(Number(id));
                      setBucketList(data.data);
                      document.body.style.overflow = "hidden";
                      setModalView(true);
                    })
                    .catch((err) => {});
            }}
          />,
        ]}
      />
      <S.Image
        src={productInfo?.imgUrl}
        onClick={() =>
          productInfo?.originUrl && window.open(productInfo.originUrl)
        }
      />
      <S.ContentContainer>
        <S.TagContainer>
          <S.Tag>{productInfo?.groupName}</S.Tag>
          <S.Tag>{productInfo?.artistName}</S.Tag>
        </S.TagContainer>
        <S.Title>{productInfo?.title}</S.Title>
        <S.Price>{productInfo?.price}</S.Price>
      </S.ContentContainer>
      {viewLoginAlert && (
        <AppAlertModal
          setModalOpen={setViewLoginAlert}
          title="로그인하기"
          content="로그인하시겠습니까?"
          yesContent="로그인"
          yesClickHandler={() => {
            navigation("/login");
          }}
        />
      )}
      {useMemo(() => {
        return (
          modalView && (
            <BucketListModal
              setModalOpen={setModalView}
              itemId={selectItem}
              bucketList={bucketListData}
              fetchData={fetchData}
            />
          )
        );
      }, [selectItem, bucketListData, modalView])}
    </S.DetailContainer>
  );
};

export default SonminsooItemDetails;
