import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const ChatWindow = styled.div`
    width: 390px;
    height: 100%;

    box-sizing: border-box;
`;


const Chatting = () => {

    return (
        <ChatWindow>
            <Outlet />
        </ChatWindow>

    )
}

export default Chatting;