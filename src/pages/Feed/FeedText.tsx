import React, { useState} from "react";
import styled from "styled-components";

const FeedText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 140%;
  margin: 30px 16px 20px 16px;
  width: 239px;
`;
const More = styled.span`
  color: #208df1;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  display: inline;
`;
const Text = () => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLimit: number = 50;
  const [comment] = useState<string>(
    "럽셒 울정꾸기 리허설 영상 ㅜㅜ 무대 올라왔을 때는 마냥 멋지고 좋았는데 ㅜㅜ 저때 비오고 난리 였대요.. ㅜㅜ애들 고생하는거에 맴찢 ㅜㅜㅜ"
  );
  const displayedComment = isShowMore ? comment : comment.slice(0, textLimit);

  return (
    <FeedText>
      {displayedComment}
      {comment.length > textLimit && (
        <More onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? "..." : "...더보기"}
        </More>
      )}
    </FeedText>
  );
};

export default Text;
