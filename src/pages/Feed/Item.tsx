import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 10px;
  flex: 0 0 auto;
`;
const ItemWrap = styled.div`
  overflow: hidden;
  width: 390px;
`;
const Items = styled.div`
  display: flex;
  width: 1000px;
  overflow: hidden;
  margin-left: 16px;
`;
const ProductName = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const Price = styled.p`
  margin: 0;
  color: #6138f8;
  font-size: 14px;
  font-weight: 700;
`;

const ItemBox = () => {
  const [img] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <ItemWrap>
      <Items>
        {img.map((_, index) => (
          <div key={index}>
            <Item></Item>
            <ProductName>Product Name</ProductName>
            <Price>Price</Price>
          </div>
        ))}
      </Items>
    </ItemWrap>
  );
};

export default ItemBox;
