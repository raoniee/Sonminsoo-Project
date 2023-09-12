import React, { useEffect, useMemo, useState, useTransition } from "react";
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
import useAuth from "../../hooks/useAuth";

const SonminsooItemList = () => {
  const [items, setItems] = useState<sonminsooItemInfo[]>([]);
  const [isPending, startTransition] = useTransition();
  const axiosPrivate = useAxiosPrivate();
  const token = useGetToken();
  const api = token ? axiosPrivate : axios;
  const auth = useAuth();
  console.log(auth, "auth");

  const getSonminsooItemList = async () => {
    if (auth.checkIsSignIn) {
      try {
        const { data } = await api.get("/sonminsu-items?page=1&perPage=25");
        setItems(data.data);
      } catch (err) {}
    }
  };
  useEffect(() => {
    startTransition(() => {
      getSonminsooItemList();
    });
    // getSonminsooItemList();
  }, [auth, axiosPrivate]);

  // console.log(isPending, "ispending");
  // console.log(auth, "auth");
  // console.log(axiosPrivate, "axiosPrivate");

  return (
    <>
      {useMemo(() => {
        return (
          <HeaderBar
            BackButton={false}
            items={[
              <React.Fragment key={"search"}>
                <Link to={"/searchitem"}>
                  <Icon src={search} />
                </Link>
              </React.Fragment>,
              token && (
                <React.Fragment key={"settings"}>
                  <Link to={"/settings"}>
                    <Icon src={settings} />
                  </Link>
                </React.Fragment>
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
            {isPending || items.length === 0 ? (
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
