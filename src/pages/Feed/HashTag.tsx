import React, { useState } from "react";
import styled from "styled-components";
const HashTags = styled.div`
  display: flex;
`;
const Hash = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #6138f8;
  margin-left: 10px;
  &:first-child {
    margin-left: 16px;
  }
  cursor: pointer;
`;
const HashTag = () => {
  const [hashTag] = useState(["#우리애들절대지켜", "#ARMY", "#정전국"]);

  return (
    <HashTags>
      {hashTag.map((tag, index) => (
        <Hash key={index}>{tag}</Hash>
      ))}
    </HashTags>
  );
};

export default HashTag;
