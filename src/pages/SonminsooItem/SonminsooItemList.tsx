import React, { useEffect, useMemo, useState } from "react";
import SonMinsooItemInfo from "./SonMinsooItemInfo";
import EmptyItem from "./EmptyItem";
import * as S from "./style/SonminsooItemList.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGetToken from "../../hooks/useGetToken";
import { Link } from "react-router-dom";
import { sonminsooItemInfo } from "./types/SonminsooItem.type";

const SonminsooItemList = () => {
  const [items, setItems] = useState<sonminsooItemInfo[]>([]);
  const axiosPrivate = useAxiosPrivate();
  const token = useGetToken();
  const api = token ? axiosPrivate : axios;

  useEffect(() => {
    const getSonminsooItemList = async () => {
      try {
        const { data } = await api.get("/sonminsu-items?page=1&perPage=15");
        setItems(data.data);
      } catch (err) {}
    };

    getSonminsooItemList();
  }, [token]);

  return (
    <>
      {useMemo(() => {
        return (
          <HeaderBar
            BackButton={false}
            items={[
              <>
                <Link to={"/searchitem"}>
                  <Icon key={"search"} src={search} />
                </Link>
              </>,
              token && (
                <>
                  <Link to={"/settings"}>
                    <Icon key={"settings"} src={settings} />
                  </Link>
                </>
              ),
            ]}
          />
        );
      }, [])}
      <S.SonminsooListWrapper>
        <S.LinkRequestList to="/requests">
          <span>손민수템 의뢰 리스트</span>
          <span>
            <S.NavImg />
          </span>
        </S.LinkRequestList>
        <S.SonminsooItemListContainer>
          <S.SonminsooItemTitle>손민수템</S.SonminsooItemTitle>

          <S.SonminsooItemsContainer>
            {items.length === 0 ? (
              <EmptyItem />
            ) : (
              items.map((data) => {
                return (
                  <SonMinsooItemInfo
                    key={data.id}
                    groupName={data.groupName}
                    id={data.id}
                    originUrl={data.originUrl}
                    imgUrl={data.imgUrl}
                    artistName={data.artistName}
                    title={data.title}
                    price={data.price}
                    isInMyBucket={data?.isInMyBucket}
                  />
                );
              })
            )}
          </S.SonminsooItemsContainer>
        </S.SonminsooItemListContainer>
      </S.SonminsooListWrapper>
    </>
  );
};
export default SonminsooItemList;
