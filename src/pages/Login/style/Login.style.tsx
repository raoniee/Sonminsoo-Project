import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h2`
  width: 100%;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInput = styled.input.attrs({
  autoComplete: "off",
})`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  background-color: #f6f6f6;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  color: #e8e8e8;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  width: 91%;
  text-align: center;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const P = styled.p`
  text-align: center;
  margin-bottom: 65px;
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;
