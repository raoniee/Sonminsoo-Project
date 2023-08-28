import React, { useState, useRef } from 'react';
import iconImage from "../../assets/images/svg/ic-image.svg";
import iconCamera from "../../assets/images/svg/ic-camera.svg";
import * as S from './style/ChatInputBar.style';
import WebAlertModal from './WebAlertModal';

type Props = {
    ban: boolean;
}

type UploadImage = {
    file: File;
    // thumbnail: string;
    // type: string;
}


const ChatInputBar = ({ban}:Props) => {

    // 채팅 정지 상태에 따른 채팅input placeholder 설정
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<File[]>();
    const maxFileCount = 4;
    const [onAlert, setOnAlert] = useState<boolean>(false);

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
        
        if (fileList) {
            let sendFileList = [];
            
            for (let i = 0; i < fileList.length; i++) {
                sendFileList?.push(fileList[i]);
            }
        
            if (fileList && fileList.length > maxFileCount) {
                setOnAlert(true);
                sendFileList = sendFileList.slice(0, maxFileCount);
            } 

            setImageFile(sendFileList);
        }
    }; 

    const FileValidation = () => {
        
    }


    return (
        <>  
            <S.ChatBarWrapper>
                <S.IconWrapper>
                    <S.ChatIconImage src={iconImage} onClick={FileUploadClick} />
                    <input 
                        type="file" 
                        multiple
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
            {onAlert ? 
                <WebAlertModal
                    setModalOpen={setOnAlert}
                    title="알림"
                    content={`이미지 파일은 최대 ${maxFileCount}개 까지 전송할 수 있습니다.`}
                /> 
                : null
            }
        </>
    )
}

export default ChatInputBar;