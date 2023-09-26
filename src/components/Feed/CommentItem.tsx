import React, { useState, useRef, useEffect } from "react";
import detailDate from "../../utils/time";
import * as S from "./style/CommentItem.style";
import commentmore from "../../assets/images/svg/ic-more-vertical-16.svg";
import useGetToken from "../../hooks/useGetToken";
import { CommentType } from "../../types/feed";

type CommentItemProps = {
  comment: CommentType;
  showModal: (commentId: number) => void;
};

const CommentItem: React.FC<CommentItemProps> = ({ comment, showModal }) => {
  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const token = useGetToken();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpenedModalId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [comment]);

  return (
    <>
      <S.CommentContainer>
        <S.CommentProfile src={comment.author.image} />
        <S.CommentContent>
          <S.CommnetContentWrap>
            <S.UserContenWrap>
              <S.CommentNickname>{comment.author.nickName}</S.CommentNickname>
              <S.CommentTime>{detailDate(comment.createdAt)}</S.CommentTime>
            </S.UserContenWrap>
            {token ? (
              <S.CommentMoreBtn
                src={commentmore}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenedModalId(comment.id);
                }}
              />
            ) : null}
            {openedModalId === comment.id && (
              <S.ReplyBtn ref={modalRef}>
                <S.Delete onClick={() => showModal(comment.id)}>
                  삭제하기
                </S.Delete>
              </S.ReplyBtn>
            )}
          </S.CommnetContentWrap>
          <S.CommentText>{comment.content}</S.CommentText>
        </S.CommentContent>
      </S.CommentContainer>
    </>
  );
};

export default CommentItem;
