import React, { useState, useRef, useEffect } from "react";
import detailDate from "../../utils/time";
import * as S from "./style/CommentItem.style";
import commentmore from "../../assets/images/svg/ic-more-vertical-16.svg";

type CommentType = {
  id: number;
  profileImg: string;
  userName: string;
  content: string;
  createdAt: string;
};

type CommentItemProps = {
  comment: CommentType;
  showModal: () => void;
};

const CommentItem: React.FC<CommentItemProps> = ({ comment, showModal }) => {
  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

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
  }, []);

  // const handleDelete = async (feedId: number, commentId: number) => {
  //   // try {
  //   //   await axios.delete(
  //   //     `http://localhost:5000/feed/${feedId}/comments/${commentId}`
  //   //   );
  //   //   alert("댓글이 삭제되었습니다.");
  //   //   setOpenedModalId(null);
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
  //   // }
  // };
  return (
    <>
      <S.CommentContainer>
        <S.CommentProfile src={comment.profileImg} />
        <S.CommentContent>
          <S.CommnetContentWrap>
            <S.UserContenWrap>
              <S.CommentNickname>{comment.userName}</S.CommentNickname>
              <S.CommentTime>{detailDate(comment.createdAt)}</S.CommentTime>
            </S.UserContenWrap>
            <S.CommentMoreBtn
              src={commentmore}
              onClick={(e) => {
                e.stopPropagation();
                setOpenedModalId(comment.id);
              }}
            />
            {openedModalId === comment.id && (
              <S.ReplyBtn ref={modalRef}>
                <S.Delete onClick={showModal}>삭제하기</S.Delete>
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
