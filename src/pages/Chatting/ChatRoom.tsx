import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ChatProps, MyChat, OtherChat } from '../../components/Chatting/ChatBubble';
import ChatHeader from '../../components/Chatting/ChatHeader';
import IconButton, { BackButton } from '../../components/Chatting/IconButton';
import ChatBar from '../../components/Chatting/ChatBar';
import ChatMember from './ChatMember';
import iconMember from '../../assets/images/svg/ic-member.svg';




const LinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    
    &:visited {
        color: blue;
    }
`

const ChatTitle = styled.div`
    width: 100%;
    height: 100%;

    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;

`;


const ChatRoomWindow = styled.div`
    width: 100%;
    height: 100%;
    padding: 70px 16px 98px;
`;




const ChatRoom = () => {

    const chatData: ChatProps = {
        id: 123,
        fandomId: 12345,
        author: "아마추어 손민수",
        content: "ㅎ헷 이게 제 삶의 낙인걸요.. 큐큐 ㅋㅋㅋ",
        readCount: 22,
        createAt: new Date(),
    }

    const chatDataOther: ChatProps = {
        id: 345,
        fandomId: 12345,
        author: "아마추어 손민수",
        content: "와아 ㅜㅜ 저도 이거 봤어요!! 꾹이가 리허설 할 때, 입은 연습복 정보도 감사합니당!! ㅎㅎ",
        profileImage: '',
        readCount: 22,
        createAt: new Date(),
    }

    const ban: boolean = false;

    return (
            <>
                <ChatHeader>
                    <BackButton />
                    <ChatTitle>A.R.M.Y</ChatTitle>
                    <LinkItem to="/chatting/chatmember">
                        <IconButton src={iconMember} />
                    </LinkItem>
                </ChatHeader>
                <ChatRoomWindow>
                    <OtherChat 
                         id={chatDataOther.id}
                         fandomId={chatDataOther.fandomId}
                         author={chatDataOther.author}
                         content={chatDataOther.content}
                         profileImage={chatDataOther.profileImage}
                         readCount={chatDataOther.readCount}
                         createAt={chatDataOther.createAt}
                    />
                    <MyChat 
                        id={chatData.id}
                        fandomId={chatData.fandomId}
                        author={chatData.author}
                        content={chatData.content}
                        readCount={chatData.readCount}
                        createAt={chatData.createAt}
                    />
                </ChatRoomWindow>
                <ChatBar ban={ban} />
            </>
            
    )
}

export default ChatRoom;