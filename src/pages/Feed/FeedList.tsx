import { useCallback, useEffect, useState } from "react";

import { FeedsType } from "../../types/feed";
import * as S from "./style/Feed.style";

import FeedHeaderBar from "../../components/Feed/FeedHeaderBar";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import FeedItem from "../../components/Feed/FeedItem";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const FeedList = () => {
  const auth = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [feedsData, setFeedsData] = useState<FeedsType>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let timerId: NodeJS.Timeout | undefined;
  let count = 10;

  useEffect(() => {
    if (auth.checkIsSignIn) {
      const fetchData = async () => {
        const page = 1;
        const ITEMS_PER_PAGE = 10;
        const res = await axiosPrivate.get(
          `/feeds?page=${page}&perPage=${ITEMS_PER_PAGE}`
        );
        setFeedsData(res.data.data);
      };
      fetchData();
    }
  }, [auth.checkIsSignIn, axiosPrivate]);

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
          count += 1;
          console.log("count", count);
          const { data } = await axiosPrivate.get(
            `/feeds?page=1&perPage=${count}`
          );
          // console.log("setItem!", count);
          setFeedsData(data.data);
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
    <S.FeedContainer>
      <FeedHeaderBar />
      {feedsData.map((feedData) => (
        <FeedItem key={feedData.id} feedData={feedData} />
      ))}
      <div ref={setTarget} />
      <FooterNavBar />
    </S.FeedContainer>
  );
};

export default FeedList;
