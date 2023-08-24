import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import type { Fandom } from '../../types/chattingType';
import logo from '../../assets/images/svg/ic-logo.svg';
import ChatHeader from '../../components/Chatting/ChatHeader';
import ChatFandom from '../../components/Chatting/ChatFandom';
import FooterNavBar from '../../components/FooterNavBar';



const Logo = styled.img`
`;

const ChatListWindow = styled.div`
    width: 100%;
    height: 100%;

    padding: 56px 16px 80px;
`;

const LinkItem = styled(Link)`
    cursor: pointer;
    color: black;

    &:visited {
        color: black;
    }
`;


type FandomData = Fandom[];


const ChatList = () => {

    const [fandomData, setFandomData] = useState<FandomData>([]);

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3001/fandom');
            setFandomData(res.data);
        } catch (err) {
            console.log("Error", err);
        }
    }

    return (
        <>
            <ChatHeader>
                <Logo src={logo} />
            </ChatHeader>
            <ChatListWindow>
                {fandomData?.map((fandom) => (
                    <React.Fragment key={fandom.id}>
                        <LinkItem to={`chatroom/${fandom.id}`}>
                            <ChatFandom 
                                id={fandom.id}
                                title={fandom.title} 
                                memberCount={fandom.memberCount} 
                                image={fandom.image}
                                createAt={fandom.createAt}
                            />
                        </LinkItem>
                    </React.Fragment>
                ))}
            </ChatListWindow>
            <FooterNavBar />
        </>
    )
}


export default ChatList;
