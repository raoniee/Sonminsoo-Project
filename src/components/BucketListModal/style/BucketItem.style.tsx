import { styled } from "styled-components";

export const BucketItemContainer = styled.div`
  width: 80px;
  //   background: rgba(0, 0, 0, 0.3);
  margin-right: 10px;
`;
export const BucketItemImage = styled.div<{ $url: string }>`
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 8px;
  flex-shrink: 0;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
