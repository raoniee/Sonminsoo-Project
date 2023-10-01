import * as S from "./style/MyFandomBoard.style";
import React, { useState } from "react";
import AppAlertModal from "../common/AlertModal/AppAlertModal";
import FandomCircle from "./FandomCircle";
import useGetToken from "../../hooks/useGetToken";
import { useNavigate } from "react-router-dom";
import { Fandoms } from "../../types/Home.type";

const MyFandomBoard: React.FC<{ fandoms: Fandoms }> = ({ fandoms }) => {
  const navigate = useNavigate();
  const [onAlert, setOnAlert] = useState<boolean>(false);
  const token = useGetToken();

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
            token ? navigate("/myfandom") : setOnAlert(true);
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
      {fandoms.length >= 1 ? (
        <S.FandomCircleListBox>
          {fandoms.map((item) => (
            <FandomCircle key={item.id} item={item} />
          ))}
        </S.FandomCircleListBox>
      ) : (
        <S.Container>
          <S.MenuBox onClick={() => navigate("/myfandom/search")}>
            <S.MenuIconText>🔍</S.MenuIconText>
            <S.MenuText>
              또 다른 팬덤도 <br />
              둘러보세요!
            </S.MenuText>
          </S.MenuBox>
        </S.Container>
      )}
    </S.MyFandomBoardContainer>
  );
};
export default MyFandomBoard;
