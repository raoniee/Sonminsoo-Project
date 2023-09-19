import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState, useTransition } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
import { bucketList, sonminsooItemInfo } from "./types/SonminsooItem.type";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGetToken from "../../hooks/useGetToken";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const SonminsooItem = () => {
  const [sonminsooItems, setSonminsooItems] = useState<sonminsooItemInfo[]>([]);
  const [modalView, setModalView] = useState(false);
  const [viewLoginAlert, setViewLoginAlert] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();
  const [isItemPending, startTransition] = useTransition();

  const axiosPrivate = useAxiosPrivate();
  const token = useGetToken();
  const api = token ? axiosPrivate : axios;
  const auth = useAuth();
  const navigation = useNavigate();

  const getSonminsooItemList = async () => {
    if (auth.checkIsSignIn) {
      try {
        const { data } = await api.get("/sonminsu-items?page=1&perPage=12");
        setSonminsooItems(data.data);
      } catch (err) {}
    }
  };

  useEffect(() => {
    startTransition(() => {
      getSonminsooItemList();
    });
  }, [auth.accessToken, axiosPrivate]);

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  return (
    <S.SonminsooItemContainer>
      <Outlet
        context={{
          setModalView,
          setBucketList,
          setSelectItem,
          setViewLoginAlert,
          sonminsooItems,
          setSonminsooItems,
          isItemPending,
          getSonminsooItemList,
        }}
      />
      {useMemo(() => {
        return (
          modalView && (
            <BucketListModal
              setModalOpen={setModalView}
              itemId={selectItem}
              bucketList={bucketListData}
              fetchData={getSonminsooItemList}
            />
          )
        );
      }, [selectItem, bucketListData, modalView])}
      {useMemo(() => {
        return (
          viewLoginAlert && (
            <AppAlertModal
              setModalOpen={setViewLoginAlert}
              title="로그인하기"
              content="로그인하시겠습니까?"
              yesContent="로그인"
              yesClickHandler={() => {
                navigation("/login");
              }}
            />
          )
        );
      }, [viewLoginAlert])}
      {useMemo(() => {
        return <FooterNavBar />;
      }, [])}
    </S.SonminsooItemContainer>
  );
};

export default SonminsooItem;
