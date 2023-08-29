import React, { useEffect, useState } from 'react';
import BackButton from './BackButton';
import { createBrowserHistory } from 'history';
import type {ChatMember} from '../../types/chattingType';
import ChatUserInfo from './ChatUserInfo';
import * as S from './style/ChatSearchMember.style';




type SearchMember = {
    setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const memberMock:ChatMember[] = [
    {
        $ban: false,
        userName: "아마추어 손민수1",
    },
    {
        $ban: false,
        userName: "나는야 손민수",
    },
    {
        $ban: false,
        userName: "손민수 하러 옴",
    },
    {
        $ban: true,
        userName: "룰라랄라",
    },
    {
        $ban: true,
        userName: "호에에엥",
    },
];

const ChatSearchMember = ({setOpenSearch}: SearchMember) => {

    const [userInput, setUserInput] = useState<string>('');
    
    const searchHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }
    
    const userFiltered = memberMock.filter((member) => member.userName.toUpperCase().includes(userInput));


    useEffect(() => {

        // 모달창 history 스택 쌓기
        const history = createBrowserHistory();
        window.history.pushState(null, "", window.location.href);

        const event = history.listen((listener) => {
        if (listener.action === "POP") {
            window.history.pushState(null, "", window.location.href);
            history.back();
            setOpenSearch(false);
        }});

        return event;

    }, []);
    
    return (
        <S.SearchMemberWrapper>
            <S.SearchHeader>
                <BackButton />
                <S.SearchInput 
                    type="text" 
                    placeholder='채팅방 멤버를 검색해주세요.' 
                    onChange={searchHandler}
                />
            </S.SearchHeader>
            <S.SearchMemberContainer>
            {userInput && userFiltered
                .map((member, index) => (
                    <React.Fragment key={index}>
                        <ChatUserInfo $ban={member.$ban} userName={member.userName} />         
                    </React.Fragment>
            ))}
            </S.SearchMemberContainer>
        </S.SearchMemberWrapper>
    )
}

export default ChatSearchMember;