import styled from "styled-components";
import { Outlet } from "react-router-dom";
import FooterNavBar from "../../components/FooterNavBar";
import StatusBar from "./StatusBar";
import { Link } from "react-router-dom";
import BucketListModal from "../../components/BucketListModal";

const SonminsooItemContainer = styled.div`
  width: 100%;
`;
const LinkRequestList = styled(Link)`
  display: flex;
  margin: 0 auto;
  padding: 0 14px;
  width: 358px;
  height: 60px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: cornflowerblue;
  align-items: center;
  justify-content: space-between;
`;

const SonminsooItem = () => {
  return (
    <>
      <SonminsooItemContainer>
        <StatusBar />
        <LinkRequestList to="/requests">
          <span>손민수템 의뢰 리스트</span>
          <span>&gt;</span>
        </LinkRequestList>
        <Outlet />
        <BucketListModal />
        <FooterNavBar />
      </SonminsooItemContainer>
    </>
  );
};

export default SonminsooItem;
