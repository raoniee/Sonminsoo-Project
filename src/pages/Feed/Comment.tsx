import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import profile from "../../assets/images/svg/profile1.svg";
import more from "../../assets/images/svg/ic-more-vertical-16.svg";
import naviIcon from "../../assets/images/svg/ic-navigation.svg";

const CommentContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  margin: 19px 0;
`;
const Profile = styled.div`
  background: url(${profile});
  width: 40px;
  height: 40px;
  margin-right: 7px;
`;
const CommentContent = styled.div`
  width: 300px;
`;
const ContentWrap = styled.div`
  display: flex;
  margin-bottom: 6px;
  position: relative;
`;
const Nickname = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1d1b20;
`;
const Time = styled.div`
  color: #6c7080;
  font-size: 13px;
  font-weight: 500;
  margin-left: 6px;
`;
const CommentText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 135%;
  color: #1d1b20;
  height: 38px;
`;
const MoreBtn = styled.div`
  background: url(${more});
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  right: -7px;
`;

const ReplyBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 73px;
  height: 75px;
  border: 1px solid #d4dae1;
  border-radius: 8px;
  background-color: #fff;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const Reply = styled.div`
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid #d4dae1;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;
const Delete = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding-top: 10px;
`;
const CommentInput = styled.form<{ nestedcomment?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => (props.nestedcomment ? "10px 0" : "19px 16px")};
`;
const CommentInputBox = styled.input`
  width: calc(100% - 50px);
  height: 40px;
  border-radius: 10px;
  background: #ebeef2;
  border: none;
  outline: none;
  padding-left: 13px;
  box-sizing: border-box;
  &::placeholder {
    color: #6c7080;
    font-size: 14px;
    font-weight: 500;
  }
`;
const SendBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #208df1;
  cursor: pointer;
  background-image: url(${naviIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
`;
const NestedCommentCancle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fc1e6e;
  margin: 10px 0;
`;
type CommentProps = {
  nestedcomment?: boolean;
};
type FeedCommentData = {
  content: string;
};
const Comment: React.FC<CommentProps> = ({ nestedcomment }) => {
  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);
  const [isNestedComment, setIsNestedComment] = useState<boolean>(false);
  const [comment, setComment] = useState<FeedCommentData[]>([
    {
      content: "comments",
    },
  ]);
  useEffect(() => {
    const closeReply = () => setIsReplyOpen(false);
    document.addEventListener("click", closeReply);

    return () => {
      document.removeEventListener("click", closeReply);
    };
  }, []);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/data/feedComment.json"
        );
        setComment(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchComment();
  }, []);
  return (
    <>
      {comment.map((item, index) => (
        <CommentContainer key={index}>
          <Profile />
          <CommentContent>
            <ContentWrap>
              <Nickname>아마추어 손민수</Nickname>
              <Time>10분 전</Time>
              <MoreBtn
                onClick={(e) => {
                  e.stopPropagation();
                  setIsReplyOpen(!isReplyOpen);
                }}
              />
              {isReplyOpen && (
                <ReplyBtn onClick={(e) => e.stopPropagation()}>
                  <Reply
                    onClick={() => {
                      setIsNestedComment(true);
                      setIsReplyOpen(false);
                    }}
                  >
                    답글달기
                  </Reply>
                  <Delete>삭제하기</Delete>
                </ReplyBtn>
              )}
            </ContentWrap>
            <CommentText>{item.content}</CommentText>
            {isNestedComment ? (
              <>
                <CommentInput nestedcomment={true}>
                  <CommentInputBox placeholder="댓글을 입력해 주세요"></CommentInputBox>
                  <SendBtn></SendBtn>
                </CommentInput>
                <NestedCommentCancle
                  onClick={() => {
                    setIsNestedComment(false);
                  }}
                >
                  답글 취소
                </NestedCommentCancle>
              </>
            ) : null}
          </CommentContent>
        </CommentContainer>
      ))}
      <CommentInput>
        <CommentInputBox placeholder="댓글을 입력해 주세요"></CommentInputBox>
        <SendBtn></SendBtn>
      </CommentInput>
    </>
  );
};
export default Comment;
