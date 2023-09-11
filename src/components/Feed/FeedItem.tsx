import React, { useEffect, useState } from "react";
import FeedHeader from "./FeedHeader";
import * as S from "../../pages/Feed/style/Feed.style";
import ItemBox from "../../components/Feed/ItemBox";
import FeedContent from "../Feed/FeedContent";
import { FeedProps } from "../../types/feed";

const FeedItem: React.FC<FeedProps> = ({ feedData }) => {
  return (
    <>
      <FeedHeader
        feedId={feedData.id}
        author={feedData.author}
        fandom={feedData.fandom}
        createdAt={feedData.createdAt}
      />
      <S.FeedImage src={feedData.image} />
      <FeedContent feedData={feedData} />
    </>
  );
};

export default FeedItem;
