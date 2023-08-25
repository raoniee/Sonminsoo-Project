import { Link } from "react-router-dom";
import { styled } from "styled-components";
import background from "../../../assets/images/svg/SonminsooItem/requsetButtonBackground.svg";

export const SonminsooItemContainer = styled.div`
  width: 100%;
`;
export const LinkRequestList = styled(Link)`
  display: flex;
  margin: 0 auto;
  padding: 0 14px;
  width: 358px;
  height: 60px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: space-between;
`;
