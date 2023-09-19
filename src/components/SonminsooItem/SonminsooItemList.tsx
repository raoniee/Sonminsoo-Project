import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";

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

const SonminsooItemList = () => {
  const token = useGetToken();

  const { sonminsooItems, isItemPending } = useOutletContext<{
    sonminsooItems: sonminsooItemInfo[];
    isItemPending: boolean;
  }>();

  let options = {
    root: null, // 타켓 요소가 "어디에" 들어왔을때 콜백함수를 실행할 것인지 결정합니다. null이면 viewport가 root로 지정됩니다.
    //root: document.querySelector('#scrollArea'), => 특정 요소를 선택할 수도 있습니다.
    rootMargin: "0px", // root에 마진값을 주어 범위를 확장 가능합니다.
    threshold: 1, // 타겟 요소가 얼마나 들어왔을때 백함수를 실행할 것인지 결정합니다. 1이면 타겟 요소 전체가 들어와야 합니다.
  };

  //  관측되었을 경우 실행할 콜백함수입니다.
  let callback = () => {
    console.log("관측되었습니다.");
  };

  // observer를 선언합니다.
  // 첫 번째 인자로 관측되었을 경우 실행할 콜백함수를 넣습니다.
  // 두 번째 인자로 관측에 대한 옵션을 지정합니다.
  let observer = new IntersectionObserver(callback, options);

  //  타겟 요소를 지정합니다.
  // React에서는 useRef를 활용하여 DOM을 선택합니다.
  const infiniteScrollRef = useRef<HTMLDivElement>(null);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  useEffect(() => {
    if (!infiniteScrollRef.current) return;

    observer.observe(infiniteScrollRef.current);

    console.log(
      infiniteScrollRef.current.scrollHeight,
      "infiniteScrollRef.current"
    );
    // return () => observer.unobserve(infiniteScrollRef.current);
  }, []);

  // observer.observe(target); // ✅ 타겟 요소 관측 시작
  // observer.unobserve(target); // ✅ 타겟 요소 관측 종료

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
              <S.SonminsooItemsContainer ref={infiniteScrollRef}>
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
            </S.SonminsooItemListContainer>
          </S.SonminsooListWrapper>
        );
      }, [isItemPending, sonminsooItems])}
      {/* <S.SonminsooListWrapper>
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
        </S.SonminsooItemListContainer>
      </S.SonminsooListWrapper> */}
    </>
  );
};
export default SonminsooItemList;
