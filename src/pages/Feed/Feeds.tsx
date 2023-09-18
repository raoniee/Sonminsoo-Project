import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { FeedsType } from "../../types/feed";
import * as S from "./style/Feed.style";
import FeedHeaderBar from "../../components/Feed/FeedHeaderBar";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import FeedItem from "../../components/Feed/FeedItem";

const Feeds = () => {
  const auth = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [feedsData, setFeedsData] = useState<FeedsType>([]);

  useEffect(() => {
    if (auth.checkIsSignIn) {
      const fetchData = async () => {
        const res = await axiosPrivate.get("/feeds");
        setFeedsData(res.data.data);
      };
      fetchData();
    }
  }, [auth.accessToken, axiosPrivate]);

  return (
    <S.FeedContainer>
      <FeedHeaderBar />
      {feedsData.map((feedData, index) => (
        <FeedItem feedData={feedData} key={`${feedData.id}-${index}`} />
      ))}
      <FooterNavBar />
    </S.FeedContainer>
  );
};

export default Feeds;
