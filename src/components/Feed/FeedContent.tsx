import React, { useEffect, useState } from "react";

import ItemBox from "../Feed/ItemBox";

import { FeedProps } from "../../types/feed";

const FeedContent: React.FC<FeedProps> = ({ feedData }) => {
  return (
    <>
      <ItemBox feedItems={feedData.sonminsuItems.map((item) => item.id)} />
    </>
  );
};

export default FeedContent;
