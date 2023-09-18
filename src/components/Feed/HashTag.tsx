import React from "react";
import * as S from "./style/HashTag.style";
import { FeedHashTagsProps } from "../../types/feed";

const HashTag: React.FC<FeedHashTagsProps> = ({ hashTags }) => {
  return (
    <S.HashTags>
      {hashTags.length &&
        hashTags.map((tag, index) => <S.Hash key={index}>#{tag}</S.Hash>)}
    </S.HashTags>
  );
};

export default HashTag;
