import { useEffect, useMemo, useState } from "react";
import SonMinsooItemInfo from "./SonMinsooItemInfo";
import EmptyItem from "./EmptyItem";
import * as S from "./style/SonminsooItemList.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";
import axios, { axiosPrivate } from "../../api/axios";

type sonminsooItemInfo = {
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string;
  title: string;
};

const SonminsooItemList = () => {
  const [items, setItems] = useState<sonminsooItemInfo[]>([]);
  const [searchView, setSearchView] = useState<boolean>(false);
  useEffect(() => {
    const getSonminsooItemList = async () => {
      try {
        const { data } = await axiosPrivate.get(
          "/sonminsu-items?page=1&perPage=10"
        );
        console.log(data.data);
        setItems(data.data);
      } catch (err) {
        console.log(err, "axios err");
      }
    };
    getSonminsooItemList();
  }, []);
  return (
    <>
      {useMemo(() => {
        return (
          <>
            <HeaderBar
              BackButton={false}
              items={[
                searchView && <S.SearchText key={"keyword"} />,
                <Icon
                  key={"search"}
                  src={search}
                  onClick={() => {
                    setSearchView(!searchView);
                  }}
                />,
                <Icon key={"settings"} src={settings} />,
              ]}
            />
            <S.LinkRequestList to="/requests">
              <span>손민수템 의뢰 리스트</span>
              <span>&gt;</span>
            </S.LinkRequestList>
          </>
        );
      }, [searchView])}
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
                />
              );
            })
          )}
        </S.SonminsooItemsContainer>
      </S.SonminsooItemListContainer>
    </>
  );
};
export default SonminsooItemList;
