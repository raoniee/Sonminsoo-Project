import { Outlet } from "react-router-dom";
import styled from "styled-components";

const FeedWriteContainer = styled.div`
  width: 100%;
`;
const FeedWrite = () => {
  return (
    <FeedWriteContainer>
      <Outlet />
    </FeedWriteContainer>
  );
};

export default FeedWrite;
