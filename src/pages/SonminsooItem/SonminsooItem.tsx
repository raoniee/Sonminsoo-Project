import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import { useMemo, useState } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";

type bucketList = {
  id: string;
  img: string;
  title: string;
}[];

const SonminsooItem = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  return (
    <>
      <S.SonminsooItemContainer>
        {useMemo(() => {
          return (
            <>
              <HeaderBar
                BackButton={false}
                items={[
                  <Icon src={search} key="search" />,
                  <Icon src={settings} key="settings" />,
                ]}
              />
              <S.LinkRequestList to="/requests">
                <span>손민수템 의뢰 리스트</span>
                <span>&gt;</span>
              </S.LinkRequestList>
            </>
          );
        }, [])}

        <Outlet context={{ setModalView, setBucketList }} />
        {modalView && (
          <BucketListModal
            setModalOpen={setModalView}
            addClickHandler={() => {}}
            bucketList={bucketListData}
            bucketList={bucketListData}
          />
        )}
        {useMemo(() => {
          return <FooterNavBar />;
        }, [])}
        {useMemo(() => {
          return <FooterNavBar />;
        }, [])}
      </S.SonminsooItemContainer>
    </>
  );
};

export default SonminsooItem;
