import * as S from "./style/HomeHeader.style";
import { useNavigate } from "react-router-dom";
import useGetToken from "../../hooks/useGetToken";
const HomeHeader: React.FC = () => {
  const navigate = useNavigate();
  const token = useGetToken();

  return (
    <S.HomeHeaderBox>
      <S.HomeLogo />

      {token && (
        <S.HomeSettingIcon
          onClick={() => {
            navigate("/settings");
          }}
        />
      )}
    </S.HomeHeaderBox>
  );
};
export default HomeHeader;
