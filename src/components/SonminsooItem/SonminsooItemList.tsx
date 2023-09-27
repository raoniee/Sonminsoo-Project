import React, { useMemo, useState, useCallback } from "react";

import EmptyItem from "./EmptyItem";
import * as S from "./style/SonminsooItemList.style";
import HeaderBar from "../common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGetToken from "../../hooks/useGetToken";
import { Link, useOutletContext } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SonMinsooItemInfo from "./SonMinsooItemInfo";
import { sonminsooItemInfo } from "../../pages/SonminsooItem/types/SonminsooItem.type";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SonminsooItemList = () => {
  const token = useGetToken();
  let count = 9;

  const { sonminsooItems, isItemPending, setSonminsooItems } =
    useOutletContext<{
      sonminsooItems: sonminsooItemInfo[];
      setSonminsooItems: React.Dispatch<
        React.SetStateAction<sonminsooItemInfo[]>
      >;
      isItemPending: boolean;
    }>();
  const axiosPrivate = useAxiosPrivate();
  const api = token ? axiosPrivate : axios;
  const [isLoaded, setIsLoaded] = useState(false);
  let timerId: NodeJS.Timeout | undefined;

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (!!timerId) {
        console.log("return");
        return;
      }
      if (isLoaded) {
        console.log("true");
      }
      timerId = setTimeout(() => {
        timerId = undefined;
      }, 500);

      console.log("timerId", timerId);
      if (entry.isIntersecting && !isLoaded) {
        console.log("start");
        observer.unobserve(entry.target);

        setIsLoaded(() => true);
        try {
          count += 6;
          const { data } = await api.get(
            `/sonminsu-items?page=1&perPage=${count}`
          );
          console.log("setItem!", count);
          setSonminsooItems(data.data);
          setIsLoaded(() => false);
        } catch (err) {
          setIsLoaded(() => false);
        }

        observer.observe(entry.target);
      }
    },
    []
  );

  //현재 대상 및 option을 props로 전달
  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
    onIntersect,
  });
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
      {useMemo(() => {
        return (
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
                {isItemPending || sonminsooItems.length === 0 ? (
                  <EmptyItem />
                ) : (
                  sonminsooItems.map((data) => {
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

              <div ref={setTarget} />
            </S.SonminsooItemListContainer>
          </S.SonminsooListWrapper>
        );
      }, [isItemPending, sonminsooItems])}
    </>
  );
};
export default SonminsooItemList;
