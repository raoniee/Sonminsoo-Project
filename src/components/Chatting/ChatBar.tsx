import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import iconSend from '../../assets/images/svg/ic-send.svg';
import iconImage from "../../assets/images/svg/ic-image.svg";
import iconCamera from "../../assets/images/svg/ic-camera.svg";

const ChatBarWrapper = styled.div`
    width: 100%;
    height: 98px;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 16px;
    box-shadow: 0 -5px 5px -5px lightgray;


    display: flex;
    position: fixed;
    bottom: 0;
`;

const IconWrapper = styled.div`
    padding-top: 24px;

    display: flex;
`;

const ChatIconImage = styled(IconButton)`
    cursor: pointer;
    margin-right: 16px;
`;

const ChatInputWrapper = styled.div`
    width: 100%;
    margin-top: 16px;

    display: flex;

`;

const ChatInput = styled.input`
    min-width: calc(100% - 50px);
    height: 40px;
    
    margin-left: 3px;
    margin-right: 6px;
    padding-left: 13px;
    padding-right: 13px;
    
    border: none;
    border-radius:10px;
    background-color: #EBEEF2;
    box-sizing: border-box;

    color: #6C7080;
    font-size: 14px;

    &:disabled {
        background-color: #DDDFE1;
    }
`;

const ChatInputButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;

    border: 0;
    border-radius: 10px;
    background: #208DF1 url(${iconSend}) no-repeat center;
    cursor: pointer;

    &:disabled {
        background-color: #DDDFE1;
        cursor: default;
    }
`;


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
    const [placeHolder, SetPlaceHolder] = useState('채팅을 입력해 주세요');    
    useEffect(() => {
        if(ban) {
            SetPlaceHolder('채팅정지 상태입니다');
        } else {
            SetPlaceHolder('채팅을 입력해 주세요');
        }
    }, [ban]);

    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<UploadImage>();
    

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
    

    // input 파일형식
    const acceptFormat='image/jpg, image/jpeg, image/png';



    return (
        <ChatBarWrapper>
            <IconWrapper>
                <ChatIconImage src={iconImage} onClick={FileUploadClick} />
                <input 
                    type="file" 
                    accept={acceptFormat}
                    ref={fileInputRef} 
                    onChange={UploadFileHandler}
                    style={{display: 'none'}}
                />
                <ChatIconImage src={iconCamera} onClick={FileUploadClick} />
            </IconWrapper>
            <ChatInputWrapper>
                <ChatInput placeholder={placeHolder} disabled={ban ? true : false} />
                <ChatInputButton disabled={ban ? true : false} />
            </ChatInputWrapper>
        </ChatBarWrapper>
    )
}

export default ChatBar;