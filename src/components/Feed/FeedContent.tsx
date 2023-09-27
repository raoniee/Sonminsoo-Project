import React from "react";

import ItemBox from "./ItemBox";
import FeedText from "./FeedText";
import HashTag from "./HashTag";
import { FeedProps } from "../../types/feed";

const FeedContent: React.FC<FeedProps> = ({ feedData }) => {
  return (
    <>
      <ItemBox feedItems={feedData.sonminsuItems.map((item) => item.id)} />
      <FeedText content={feedData.content} />
      <HashTag hashTags={feedData.tags} />
    </>
  );
};

export default FeedContent;
