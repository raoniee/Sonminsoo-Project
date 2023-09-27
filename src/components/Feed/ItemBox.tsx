import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style/Item.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { FeedItemProps } from "../../types/feed";
import { SonminsooItemType } from "../../types/feed";

const ItemBox: React.FC<FeedItemProps> = ({ feedItems }) => {
  const auth = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [sonminsuItem, setSonminsuItem] = useState<SonminsooItemType[]>([]);

  useEffect(() => {
    if (auth.checkIsSignIn) {
      const fetchItem = async () => {
        const res = await axiosPrivate.get(`/sonminsu-items`);
        setSonminsuItem(res.data.data);
      };
      fetchItem();
    }
  }, [auth.checkIsSignIn, axiosPrivate]);

  const navigate = useNavigate();
  const swiperParams = {
    slidesPerView: 3.5,
    spaceBetween: 10,
  };
  // sonminsooItem id , feedData item id filtering
  const filterItem = (sonminsooId: number[]): SonminsooItemType[] => {
    return sonminsuItem.filter((item) => sonminsooId.includes(item.id));
  };
  const filteredItems = filterItem(feedItems);

  return (
    <S.ItemWrap>
      <Swiper {...swiperParams}>
        {filteredItems &&
          filteredItems.map((item, itemIndex) => (
            <SwiperSlide
              key={`${itemIndex}`}
              onClick={() => {
                navigate(`/minsooItem/details/${item.id}`);
              }}
            >
              <S.Item src={item.imgUrl} />
              <S.ProductName>{item.title}</S.ProductName>
              <S.Price>
                {item.price}
                <S.Won></S.Won>
              </S.Price>
            </SwiperSlide>
          ))}
      </Swiper>
    </S.ItemWrap>
  );
};

export default ItemBox;
