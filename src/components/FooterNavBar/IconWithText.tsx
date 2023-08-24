import iconHome from "../../assets/images/svg/ic-home-active.svg";
import iconHomeInActive from "../../assets/images/svg/ic-home-inactive.svg";
import iconFeed from "../../assets/images/svg/ic-feed-active.svg";
import iconFeedInActive from "../../assets/images/svg/ic-feed-inactive.svg";
import iconItem from "../../assets/images/svg/ic-item-active.svg";
import iconItemInActive from "../../assets/images/svg/ic-item-inactive.svg";
import iconChat from "../../assets/images/svg/ic-chat-active.svg";
import iconChatInActive from "../../assets/images/svg/ic-chat-inactive.svg";
import iconMypage from "../../assets/images/svg/ic-mypage-active.svg";
import iconMypageInActive from "../../assets/images/svg/ic-mypage-inactive.svg";
import { styled } from "styled-components";
import * as S from "./style";
type IconWithTextProps = {
  text: string;
  pathname: string;
};

const IconWithText = ({ text, pathname }: IconWithTextProps) => {
  let active = false;
  let iconUrl;

  switch (text) {
    case "홈":
      if (pathname === "/") {
        iconUrl = iconHome;
        active = true;
      } else {
        iconUrl = iconHomeInActive;
        active = false;
      }
      break;

    case "피드":
      if (pathname === "/feed") {
        iconUrl = iconFeed;
        active = true;
      } else {
        iconUrl = iconFeedInActive;
        active = false;
      }
      break;

    case "손민수템":
      if (pathname === "/minsooItem") {
        iconUrl = iconItem;
        active = true;
      } else {
        iconUrl = iconItemInActive;
        active = false;
      }
      break;

    case "채팅방":
      if (pathname === "/chatting") {
        iconUrl = iconChat;
        active = true;
      } else {
        iconUrl = iconChatInActive;
        active = false;
      }
      break;

    case "마이페이지":
      if (pathname === "/myPage") {
        iconUrl = iconMypage;
        active = true;
      } else {
        iconUrl = iconMypageInActive;
        active = false;
      }
      break;
  }

  const IconGroup = styled.div`
    width: 50px;
    height: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const TabIcon = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${iconUrl});
    background-repeat: no-repeat;
    background-position: center;
  `;

  const IconText = styled.p`
    margin: 0;
    margin-top: 1px;

    font-size: 10px;

    color: ${active ? "#6138F8" : "#A5A8B8"};
  `;

  return (
    <S.IconGroup>
      <S.TabIcon $iconUrl={$iconUrl} />
      <S.IconText $active={$active}>{text}</S.IconText>
    </S.IconGroup>
  );
};
export default IconWithText;
