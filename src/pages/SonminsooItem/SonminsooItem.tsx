import { Outlet } from "react-router-dom";
import { useState } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
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
  return (
    <>
      <S.SonminsooItemContainer>
        <HeaderBar
          BackButton={false}
          items={[<Icon src={search} />, <Icon src={settings} />]}
        />
        <S.LinkRequestList to="/requests">
          <span>손민수템 의뢰 리스트</span>
          <span>&gt;</span>
        </S.LinkRequestList>
        <Outlet context={{ setModalView, setBucketList }} />
        {modalView && (
          <BucketListModal
            setModalOpen={setModalView}
            addClickHandler={() => {}}
            bucketList={bucketList}
          />
        )}
        <FooterNavBar />
      </S.SonminsooItemContainer>
    </>
  );
};

export default SonminsooItem;
