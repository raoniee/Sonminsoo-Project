import { styled } from "styled-components";

export const Button = styled.button<{
  background: string;
  border: string;
  margin?: string;
  padding?: string;
  color?: string;
  width?: string;
  height?: string;
  boxsizing?: string;
  whitespace?: string;
}>`
  ${(props) => (props.width ? `width : ${props.width}` : "width: 100%;")};
  ${(props) => (props.height ? `height : ${props.height}` : "height: 60px;")};
  ${(props) => (props.boxsizing ? `box-sizing : ${props.boxsizing}` : "")};
  ${(props) => (props.whitespace ? `white-space : ${props.whitespace}` : "")};
  border-radius: 8px;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  display: block;
  ${(props) => (props.color ? `color : ${props.color};` : "")};
  ${(props) => (props.border ? `border : ${props.border};` : "")};
  ${(props) => (props.background ? `background : ${props.background};` : "")};
  ${(props) => (props.padding ? `padding : ${props.padding};` : "")};
  ${(props) =>
    props.margin ? `margin : ${props.margin};` : "margin: 0 auto;"};
`;
