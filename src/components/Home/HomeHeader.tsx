import * as S from "./style/HomeHeader.style";
import { useNavigate } from "react-router-dom";
import useGetToken from "../../hooks/useGetToken";
const HomeHeader: React.FC = () => {
    const navigate = useNavigate();
    const token = useGetToken();

    const settingIcon = () => {
        if (token) {
            return (
                <S.HomeSettingIcon
                    onClick={() => {
                        navigate("/settings");
                    }}
                />
            );
        }
    };

    return (
        <S.HomeHeaderBox>
            <S.HomeLogo />

            {settingIcon()}
        </S.HomeHeaderBox>
    );
};
export default HomeHeader;
