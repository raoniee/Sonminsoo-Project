import * as S from "./style/MyFandomBoard.style";
import React, { useState, useEffect } from "react";
import ContentHeader from "./ContentHeader";
import AppAlertModal from "../common/AlertModal/AppAlertModal";
import FandomCircle from "./FandomCircle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGetToken from "../../hooks/useGetToken";
import { useNavigate } from "react-router-dom";
type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomData = Fandom[];
const MyFandomBoard: React.FC = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const [data, setData] = useState<FandomData>([]);
    const [onAlert, setOnAlert] = useState<boolean>(false);
    const token = useGetToken();
    useEffect(() => {
        initDataGet();
    }, [token]);

    const initDataGet = async () => {
        try {
            const res = await axiosPrivate.get("/fandoms");

            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const myFandomData = () => {
        if (data.length >= 1) {
            return (
                <S.FandomCircleListBox>
                    {data.map((item) => (
                        <FandomCircle key={item.id} item={item} />
                    ))}
                </S.FandomCircleListBox>
            );
        } else {
            return (
                <S.Container>
                    <S.MenuBox onClick={() => navigate("/myfandom/search")}>
                        <S.MenuIconText>🔍</S.MenuIconText>
                        <S.MenuText>
                            또 다른 팬덤도 <br />
                            둘러보세요!
                        </S.MenuText>
                    </S.MenuBox>
                </S.Container>
            );
        }
    };

    const handleselectClick = async () => {
        setOnAlert(false);
        navigate("/login");
    };

    return (
        <S.MyFandomBoardContainer>
            <S.ContentHeaderContainer>
                <S.MyFandomHeaderText>마이팬덤</S.MyFandomHeaderText>
                <S.ViewAllBtn
                    onClick={() => {
                        if (token) {
                            navigate("/myfandom");
                        } else {
                            setOnAlert(true);
                        }
                    }}
                />
            </S.ContentHeaderContainer>
            {onAlert && (
                <AppAlertModal
                    title="로그인하기"
                    content="로그인하시겠습니까?"
                    yesContent="로그인"
                    yesClickHandler={handleselectClick}
                    setModalOpen={setOnAlert}
                />
            )}
            {myFandomData()}
        </S.MyFandomBoardContainer>
    );
};
export default MyFandomBoard;
