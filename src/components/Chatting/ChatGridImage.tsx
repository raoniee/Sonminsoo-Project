import React, { useEffect, useState } from "react";
import * as S from "./style/ChatGridImage.style";
import { Chat } from "../../types/chattingType";
import ChatImageViewer from "./ChatImageViewer";

const ChatGridImage = ({ imageList }: Chat) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const $imageCount = imageList.length;
  const $imgUrl = "";
  const $isMe: boolean = false;

  const openViewerHandler = () => {
    setIsViewerOpen(true);
  };

  return (
    <GridImageWrapper isMe={isMe}>
      <GridImageContainer $imageCount={$imageCount}>
        {/* <GridImage $imageCount={$imageCount} />
                <GridImage $imageCount={$imageCount} /> */}
        <GridImage
          src={require("../../assets/images/png/mini.png")}
          // src={$imgUrl}
          $imageCount={$imageCount}
        />
        <S.GridImage
          src={require("../../assets/images/png/mini.png")}
          // src={$imgUrl}
          $imageCount={$imageCount}
        />
        <S.GridImage
          src={require("../../assets/images/png/mini.png")}
          // src={$imgUrl}
          $imageCount={$imageCount}
        />
        {$imageCount > 3 && (
          <ModalImage>
            <p>+{$imageCount > 3 && $imageCount - 3}개</p>
          </ModalImage>
        )}
      </GridImageContainer>
    </GridImageWrapper>
  );
};

export default ChatGridImage;
