import { Outlet } from "react-router-dom";
import { useState } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";

const SonminsooItem = () => {
  const [modalView, setModalView] = useState(true);
  const data = [{ id: "1", img: "", title: "title" }];
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
        <Outlet />
        {modalView && (
          <BucketListModal
            setModalOpen={setModalView}
            addClickHandler={() => {}}
            bucketList={data}
          />
        )}
        <FooterNavBar />
      </S.SonminsooItemContainer>
    </>
  );
};

export default SonminsooItem;
