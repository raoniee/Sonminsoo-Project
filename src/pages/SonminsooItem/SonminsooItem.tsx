import { Outlet, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";

type bucketList = {
  id: number;
  img?: string;
  bucketName: string;
}[];

const SonminsooItem = () => {
  const [modalView, setModalView] = useState(false);
  const [viewLoginAlert, setViewLoginAlert] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();

  const navigation = useNavigate();

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  return (
    <>
      <S.SonminsooItemContainer>
        <Outlet
          context={{
            setModalView,
            setBucketList,
            setSelectItem,
            setViewLoginAlert,
          }}
        />
        {modalView && (
          <BucketListModal
            setModalOpen={setModalView}
            itemId={selectItem}
            bucketList={bucketListData}
          />
        )}
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
          return <FooterNavBar />;
        }, [])}
      </S.SonminsooItemContainer>
    </>
  );
};

export default SonminsooItem;
