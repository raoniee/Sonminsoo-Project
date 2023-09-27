import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconWithText from "./IconWithText";
import * as S from "./style/FooterNavBar.style";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useGetToken from "../../../hooks/useGetToken";

const FooterNavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const token = useGetToken();
  const navigation = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/profile");
      setUserData(response.data.data.id);
    } catch (err) {}
  };
  const [userdata, setUserData] = useState();

  return (
    <S.FooterNavBarWrapper>
      <S.TabIconWrapper>
        <S.LinkItem to="/home">
          <IconWithText text="홈" pathname={pathname} />
        </S.LinkItem>
        <S.LinkItem to="/feeds">
          <IconWithText text="피드" pathname={pathname} />
        </S.LinkItem>
        <S.LinkItem to="/minsooItem">
          <IconWithText text="손민수템" pathname={pathname} />
        </S.LinkItem>
        <S.LinkItem to="/chatting">
          <IconWithText text="채팅방" pathname={pathname} />
        </S.LinkItem>
        <IconWithText
          text={token ? "마이페이지" : "로그인"}
          pathname={pathname}
          onClick={() => {
            navigation(token ? `/mypage/${userdata}` : `/login`);
          }}
        />
      </S.TabIconWrapper>
    </S.FooterNavBarWrapper>
  );
};

export default FooterNavBar;
