import styled from "styled-components";
import Link from "../../assets/images/svg/ic-link.svg";
import clothes from "../../assets/images/png/clothes.png";
import pants from "../../assets/images/png/pants1.png";
import closeBtn from "../../assets/images//svg/x.svg";

const FeedWriteLinkContainer = styled.div`
  width: 100%;
  height: 228px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid #b9bed7;
`;

const FeedLink = styled.p`
  margin-bottom: 6px;
  color: #1d1b20;
  font-size: 14px;
  font-family: "Pretendard-Bold";
`;
const MaxLinkText = styled.span`
  margin-bottom: 16px;
  color: #1d1b2080;
  font-size: 14px;
  font-family: "Pretendard-Medium";
`;
const LinkItemBox = styled.div`
  display: flex;
`;
const LinkButton = styled.button`
  width: 100px;
  height: 100px;
  border: 2px solid #c7cdda;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 12px;
`;
const LinkItem = styled.div`
  width: 100px;
  margin-right: 12px;
  position: relative;
`;
const LinkItemImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 8px;
`;
const LinkItemName = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  color: #1d1b20;
  font-family: "Pretendard-Medium";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const LinkItemPrice = styled.p`
  color: #6138f8;
  font-size: 14px;
  font-family: "Pretendard-Medium";
`;
const LinkCloseBtn = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`;
const PriceWon = styled.span`
  font-size: 12px;
`;
const LinkImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 11px;
`;
const LinkText = styled.p`
  font-size: 14px;
  color: #acb5c8;
`;

const FeedWriteLink = () => {
  return (
    <FeedWriteLinkContainer>
      <FeedLink>링크</FeedLink>
      <MaxLinkText>최대 9개의 링크 업로드 가능</MaxLinkText>
      <LinkItemBox>
        <LinkButton>
          <LinkImg src={Link} />
          <LinkText>링크 등록</LinkText>
        </LinkButton>
        <LinkItem>
          <LinkItemImg src={clothes}></LinkItemImg>
          <LinkItemName>비행사 우주곰우주곰</LinkItemName>
          <LinkItemPrice>
            12000<PriceWon>원</PriceWon>
          </LinkItemPrice>
          <LinkCloseBtn src={closeBtn} />
        </LinkItem>
        <LinkItem>
          <LinkItemImg src={pants}></LinkItemImg>
          <LinkItemName>비행사 우주곰우주곰</LinkItemName>
          <LinkItemPrice>
            12000<PriceWon>원</PriceWon>
          </LinkItemPrice>
          <LinkCloseBtn src={closeBtn} />
        </LinkItem>
      </LinkItemBox>
    </FeedWriteLinkContainer>
  );
};
export default FeedWriteLink;
