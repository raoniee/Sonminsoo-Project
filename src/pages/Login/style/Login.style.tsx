import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 400px;
  margin: 50px auto;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 124px;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
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
