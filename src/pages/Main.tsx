import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import background from "../assets/images/svg/Main/Background.svg";
import title from "../assets/images/svg/Main/title.svg";
import styled from "styled-components";
import { useUserInfoDispatch } from "../hooks/useUserInfo";
import { AxiosError } from "axios";

const MainView = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.div`
  width: 167px;
  height: 30px;
  background-image: url(${title});
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const DoubleQuotation = styled.span`
  color: #fff;
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const Content = styled.span`
  color: #fff;
  text-align: center;
  font-family: Nanum Pen Script;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
`;

const Main = () => {
  const navigation = useNavigate();
  const dispatch = useUserInfoDispatch();

  useEffect(() => {
    setTimeout(() => {
      autoSignIn();
    }, 2000);

    const autoSignIn = async () => {
      try {
        const { headers } = await axios.get("/auth/auto-sign-in");
        dispatch({
          type: "AUTH",
          accessToken: headers.authorization,
        });
        navigation("/home");
      } catch (err) {
        const { response } = err as unknown as AxiosError;
        if (response?.status === 401) {
          try {
            await axios.delete("/auth/sign-out");
            dispatch({
              type: "AUTH",
              accessToken: "",
            });
            navigation("/login");
          } catch (err) {
            navigation("/login");
          }
          navigation("/login");
        }
      }
    };
  }, []);

  return (
    <MainView>
      <Title />
      <ContentContainer>
        <DoubleQuotation>"</DoubleQuotation>
        <Content>
          주님, 오늘도 정의로운 도둑이
          <br />
          되는걸 허락해주세요
        </Content>
        <DoubleQuotation>"</DoubleQuotation>
      </ContentContainer>
    </MainView>
  );
};
export default Main;
