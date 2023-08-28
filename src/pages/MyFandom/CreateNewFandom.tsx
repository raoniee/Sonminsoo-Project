import * as S from "./style/CreateNewFandom.style";

import React, { useState, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

const CreateNewFandom = () => {
    const navigation = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    // 이미지 스트링이랑 인풋 스트링 같이 담아서 포스트 요청
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [inputVal, setInputVal] = useInput("");
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        // Non-null assertion operators
        const imageUrl = URL.createObjectURL(file!);

        if (file) {
            // 파일을 선택했을 때 수행할 작업
            setSelectedImage(imageUrl);
        }
    };

    const handleEditIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const axiosPrivate = useAxiosPrivate();

    const createNewFandomPost = async () => {
        console.log("사진정보", selectedImage);
        const formData = new FormData();
        formData.append("fandomName", inputVal);
        formData.append("file", selectedImage);
        console.log("폼데이터", formData);
        if (selectedImage && inputVal) {
            // 이미지와 인풋 값이 모두 존재하는 경우에만 실행되는 로직

            try {
                const res = await axiosPrivate.post(
                    "/users/fandoms",
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
                navigation(`/myfandom/`);
                console.log(res);
            } catch (error) {
                console.error("Error", error);
            }
        }
    };

    // 함수 만든거 프룹으로 함수 넘겨주삼 그리고 거기서 온클릭하면 요청 보내지도록
    return (
        <S.Container>
            <S.FandomContainer>
                <S.ContentHeaderContainer>
                    <S.MyFandomHeaderBox>
                        <S.LeftArrowBtn />
                        <S.MyFandomHeaderText>
                            새 팬덤 만들기
                        </S.MyFandomHeaderText>
                    </S.MyFandomHeaderBox>
                    {/* 이미지와 인풋의 값이 있으면 체크 아이콘이 그레이에서 블루로 바뀌도록  */}
                    <S.CheckIconBtn
                        style={{
                            filter:
                                inputVal && selectedImage
                                    ? "brightness(100%)"
                                    : "brightness(50%)",
                        }}
                        onClick={createNewFandomPost}
                    />
                </S.ContentHeaderContainer>
                <S.ImgContainer>
                    <S.ImgBox>
                        <S.ImgIconTextBox>
                            <S.ImgIcon onClick={handleEditIconClick} />
                            <S.ImgBoxText>이미지 추가</S.ImgBoxText>
                        </S.ImgIconTextBox>

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onInput={handleFileChange}
                            style={{ display: "none" }}
                        />
                        {selectedImage && (
                            <S.ImgBox>
                                <S.UploadImg src={selectedImage} />
                            </S.ImgBox>
                        )}
                    </S.ImgBox>
                    <S.Input onChange={setInputVal} />
                </S.ImgContainer>
            </S.FandomContainer>
        </S.Container>
    );
};
export default CreateNewFandom;

// 피드헤더바

//리케스트 폼
