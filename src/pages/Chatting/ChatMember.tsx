import React from 'react';
import styled from 'styled-components';

import ChatHeader from '../../components/Chatting/ChatHeader';
import IconButton, { BackButton } from '../../components/Chatting/IconButton';
import ChatUserInfo from '../../components/Chatting/ChatUserInfo';

import iconSearch from '../../assets/images/svg/ic-search.svg';

const ChatTitle = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
`;


const MemberWindow = styled.div`
    width: 100%;
    height: 100%;
    padding: 82px 16px 0;
`;



type MemberProps = {
    isBan: boolean,
}


type userInfoProps = {
    id: number,
    fandomId: number,
    
}

const ChatMember = () => {

    return (
        <>
            <ChatHeader>
                <BackButton />
                <ChatTitle>채팅방 멤버 관리</ChatTitle>
                
                <IconButton src={iconSearch} />
            </ChatHeader>
            <MemberWindow>
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={true} />
                <ChatUserInfo $ban={true} />
            </MemberWindow>
        </>
    )
}


export default ChatMember;