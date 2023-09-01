import * as S from "./style/HomeHeader.style";
import { useNavigate } from "react-router-dom";

const HomeHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <S.HomeHeaderBox>
      <S.HomeLogo />
      <S.HomeSettingIcon
        onClick={() => {
          navigate("/settings");
        }}
      />
    </S.HomeHeaderBox>
  );
};
export default HomeHeader;
