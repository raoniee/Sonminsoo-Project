import React from "react";
import styled from "styled-components";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteForm from "./FeedWriteForm";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import idol1 from "../../assets/images/png/idol1.png";
import * as S from './style/NewFeed.style';


const NewFeed = () => {
  return (
    <>
      <FeedHeaderWrite />
      <S.FeedWriteImage src={idol1} />
      <WriteFandom />
      <FeedWriteForm />
      <FeedWriteLink />
      <FeedWriteTarget />
    </>
  );
};
export default NewFeed;
