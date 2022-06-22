import styled from "styled-components";

export const ImgLable = styled.label`
  width: 120px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #94cef2;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  background-repeat: 0;
`;

export const UploadBtnDisable = styled.button`
  width: 120px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #757b7e;
  border: 1px solid white;
  border-radius: 10px;
`;

export const PostBoxSelectSide = styled.div`
  width: 450px;
  height: 560px;
  margin: 20px auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
`;

export const PostBoxSide = styled.div`
  width: 450px;
  height: 550px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
`;

export const PostImgSide = styled.div`
  width: 250px;
  height: 450px;
  display: flex;
  position: relative;
  align-items: center;
`;

export const PostTextSidetDiv = styled.div`
  width: 200px;
  height: 450px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const PostTextSide = styled.div`
  width: 200px;
  height: 450px;
  position: relative;
  padding: 10px 5px 10px 5px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const TextInputSide = styled.textarea`
  width: 200px;
  height: 428px;
  margin: auto 5px;
  background: rgb(220, 237, 255);
  color: #030d1a;
  border: 1px solid white;
  border-radius: 10px;
  overflow-y: auto;
  padding: 10px;
  flex-wrap: wrap;
`;

type layoutStyle = {
  layoutStyle: string;
};

export const PostImgSideDiv = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  position: relative;
  margin-bottom: 10px;
  flex-direction: ${(props: layoutStyle) => props.layoutStyle};
`;
