import React from 'react';
import styled from 'styled-components';
import ChatHeader from '../../components/Chatting/ChatHeader';
import ChatFandom from '../../components/Chatting/ChatFandom';
import { Link } from 'react-router-dom';
import FooterNavBar from '../../components/FooterNavBar';
import logo from '../../assets/images/svg/ic-logo.svg';



const Logo = styled.img`
`;

const ChatListWindow = styled.div`
    width: 100%;
    height: 100%;

    padding: 56px 16px 80px;
`;


const LinkItem = styled(Link)`
    cursor: pointer;

    &:visited {
        color: black;
    }
`


type fandomProps = {
    id: number,
    title: string,
    memberCount: number,
    image: string,
}

const fandomMok: fandomProps = {
    id: 1234,
    title: "꾹이의 모든 것",
    memberCount: 22,
    image: '',
}




const ChatList = () => {

    return (
        <>
            <ChatHeader>
                <Logo src={logo} />
            </ChatHeader>
            <ChatListWindow>
                <LinkItem to="chatroom">
                    <ChatFandom />
                </LinkItem>
                <LinkItem to="chatroom">
                    <ChatFandom />
                </LinkItem>
                <ChatFandom />
            </ChatListWindow>
            <FooterNavBar />
        </>
    )
}


export default ChatList;
