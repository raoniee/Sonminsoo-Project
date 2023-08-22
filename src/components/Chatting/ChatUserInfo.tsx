import React from 'react';
import styled from 'styled-components';



const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const UserWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

const UserImage = styled.div`
    background-color: gray;
    
    width: 56px;
    height: 56px;
    
    margin-right: 15px;
    border-radius: 70%;
`;

const UserName = styled.p`
    margin: 0;

    font-size: 16px;
    font-weight: bold;
`;

const BanButton = styled.button<{$ban: boolean}>`
    width: 103px;
    height: 30px;
    
    background: ${props => props.$ban ? '#FC1E6E' : '#EBEEF2'};
    color: ${props => props.$ban ? '#FFFFFF' : '#83839F'};
    font-weight: bold;
    font-size: 14px;
    text-align: center;

    border-radius: 4px;
`;
    

type MemberProps = {
    $ban: boolean;
}
    
const ChatUserInfo = ({$ban}:MemberProps) => {

    const chatBanText: string = $ban ? '채팅정지 취소' : '채팅정지';

    return (
        <UserInfoWrapper>
            <UserWrapper>
                <UserImage />
                <UserName>아마추어 손민수</UserName>
            </UserWrapper>
            <BanButton $ban={$ban}>{chatBanText}</BanButton>
        </UserInfoWrapper>
    )
}

export default ChatUserInfo;