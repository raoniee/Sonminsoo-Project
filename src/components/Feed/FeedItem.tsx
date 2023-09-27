import React, { useState } from "react";

import FeedHeader from "./FeedHeader";
import FeedContent from "./FeedContent";
import CommentBox from "./CommentBox";
import FeedDelete from "./FeedDelete";
import * as S from "../../pages/Feed/style/Feed.style";
import { FeedProps } from "../../types/feed";

const FeedItem: React.FC<FeedProps> = ({ feedData }) => {
  const [isFeedDelete, setIsFeedDelete] = useState<boolean>(false);

  return (
    <>
      <FeedHeader
        feedId={feedData.id}
        author={feedData.author}
        fandom={feedData.fandom}
        createdAt={feedData.createdAt}
        setIsFeedDelete={setIsFeedDelete}
      />
      <S.FeedImage src={feedData.image} />
      <FeedContent feedData={feedData} />
      <CommentBox feedId={feedData.id} comments={feedData.comments} />

      {isFeedDelete && (
        <FeedDelete setIsFeedDelete={setIsFeedDelete} feedId={feedData.id} />
      )}
    </>
  );
};

export default FeedItem;
