import React from "react";
import styled from "styled-components";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteForm from "./FeedWriteForm";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import idol2 from "../../assets/images/png/idol2.png";

const FeedWriteImage = styled.img`
  width: 100%;
  height: 390px;
`;

const NewFeed = () => {
  return (
    <>
      <FeedHeaderWrite />
      <FeedWriteImage src={idol2} />
      <WriteFandom />
      <FeedWriteForm />
      <FeedWriteLink />
      <FeedWriteTarget />
    </>
  );
};
export default NewFeed;
