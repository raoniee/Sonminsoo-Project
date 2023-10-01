import * as S from "./style/FeedWriteHashTag.style";
import { FeedWriteHashTagProps } from "../../types/feedWrite";

const FeedWriteHashTag: React.FC<FeedWriteHashTagProps> = ({
  hashTagInput,
  handleHashTagChange,
}) => {
  return (
    <S.WriteForm>
      <S.FeedWriteTags
        placeholder="태그입력하기(최대 10개)"
        onChange={handleHashTagChange}
        value={hashTagInput}
      ></S.FeedWriteTags>
    </S.WriteForm>
  );
};
export default FeedWriteHashTag;
