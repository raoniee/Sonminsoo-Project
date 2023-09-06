import { styled } from "styled-components";

import { ReactComponent as ViewAllBtnIcon } from "../../../assets/images/svg/home/viewAllBtnIcon.svg";

export const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`;

// 헤더 마이 팬덤 텍스트
export const MyFandomHeaderText = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

// ViewAllBtn 임포트
export const ViewAllBtn = styled(ViewAllBtnIcon)`
    width: 66px;
    height: 15px;
`;

// 팬덤 서클 리스트 컨테이너
export const MyFandomBoardContainer = styled.div`
    height: 193px;
`;

// 서클 리스트 박스
export const FandomCircleListBox = styled.div`
    height: 144px;

    display: flex;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

// 팬덤메뉴 컨테이너
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

// 팬덤 메뉴박스
export const MenuBox = styled.div`
    width: 80%;
    height: 125px;
    border-radius: 10px;
    border: solid black;
    box-shadow: 3px 3px;
    background-color: rgba(255, 255, 255, 0.6);
`;

//팬덤 메뉴 텍스트
export const MenuText = styled.div`
    color: #1d1b20;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 12px;
`;

//팬덤 메뉴 아이콘 텍스트
export const MenuIconText = styled.div`
    font-size: 31px;
    text-align: center;
    margin-top: 25px;
`;
