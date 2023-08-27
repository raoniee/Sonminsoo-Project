import React, { useState, useRef } from 'react';
import iconImage from "../../assets/images/svg/ic-image.svg";
import iconCamera from "../../assets/images/svg/ic-camera.svg";
import * as S from './style/ChatInputBar.style';


type Props = {
    ban: boolean;
}

type UploadImage = {
    file: File;
    thumbnail: string;
    type: string;
}



const ChatBar = ({ban}:Props) => {

    // 채팅 정지 상태에 따른 채팅input placeholder 설정
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<UploadImage>();

    // input 파일형식
    const acceptFormat='image/jpg, image/jpeg, image/png';


    // 이미지 버튼에 input 연결
    const FileUploadClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const UploadFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList && fileList[0]) {
            const url = URL.createObjectURL(fileList[0]);
            setImageFile(
                {
                    file: fileList[0],
                    thumbnail: url,
                    type: fileList[0].type,
                });
            }
    }; 


    return (
        <S.ChatBarWrapper>
            <S.IconWrapper>
                <S.ChatIconImage src={iconImage} onClick={FileUploadClick} />
                <input 
                    type="file" 
                    accept={acceptFormat}
                    ref={fileInputRef} 
                    onChange={UploadFileHandler}
                    style={{display: 'none'}}
                />
                <S.ChatIconImage src={iconCamera} onClick={FileUploadClick} />
            </S.IconWrapper>
            <S.ChatInputWrapper>
                <S.ChatInput 
                    placeholder={ban ? '채팅정지 상태입니다.' : '채팅을 입력해주세요'} 
                    disabled={ban} 
                />
                <S.ChatInputButton disabled={ban} />
            </S.ChatInputWrapper>
        </S.ChatBarWrapper>
    )
}

export default ChatBar;