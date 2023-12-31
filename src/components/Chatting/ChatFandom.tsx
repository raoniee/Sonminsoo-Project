import React from 'react';
import * as S from './style/ChatFamdom.style';
import iconUser from '../../assets/images/svg/ic_user.svg';
import type { Fandom } from '../../types/chattingType';



const ChatFandom = ({id, title, memberCount, image, createAt}: Fandom ) => {

    return (
        <S.ChatFandomWrapper>
            <S.FandomImage />
            <S.ChatInfo>
                <S.FandomWrapper>
                    <S.FandomTitle>{title}</S.FandomTitle>
                    <S.MemberIcon src={iconUser} />
                    <S.FandomMember>{memberCount}</S.FandomMember>       
                </S.FandomWrapper>
                <S.FandomActive>채팅활동<span>•</span>10분전</S.FandomActive>
            </S.ChatInfo>
        </S.ChatFandomWrapper>
    )
}

export default ChatFandom;