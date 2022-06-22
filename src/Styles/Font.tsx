import styled from "styled-components";

export const Title = styled.h1`
  color: #f23847;
  font-size: 30px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #f23847;
  font-style: italic;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  font-family: "Atitle2";
`;

interface bb {
  fontSize: number;
  marginTop: number;
  marginBottom: number;
}

export const TitleFont = styled.h1`
  font-size: ${(props: bb) => props.fontSize}px;
  color: #f23847;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #f23847;
  margin-top: ${(props: bb) => props.marginTop}px;
  margin-bottom: ${(props: bb) => props.marginBottom}px;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  font-family: "Atitle2";
`;

export const FontBig = styled.h1`
  margin: 10px auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #1763a6;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #1763a6;
  font-family: "Atitle2";
`;

interface cc {
  marginLeft: number | string;
  marginTop: number | string;
}

export const PostFontBold = styled.h3`
  font-size: 17px;
  font-weight: bold;
  color: black;
  margin-left: ${(props: cc) => props.marginLeft}px;
  margin-top: ${(props: cc) => props.marginTop}px;
  font-family: "Atitle2";
  text-align: center;
`;

export const PostFontLight = styled.h3`
  font-size: 14px;
  font-weight: lighter;
  color: black;
  margin-left: 5px;
`;

interface ee {
  color: string;
}

export const CheckFont = styled.p`
  font-size: 8px;
  font-weight: lighter;
  color: ${(props: ee) => props.color};
  display: flex;
  margin: 0 0 0 0;
  text-align: left;
`;
