import styled from "styled-components";
import 토끼 from "../assets/토끼.jpg";

export const AW = styled.div`
  width: 100%;
  background: rgb(220, 237, 255);
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const BW = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(220, 237, 255);
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const MenuWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #94cef2;
  z-index: 3;
`;

export const MenuLeft = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

export const MenuRight = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;
`;

export const MenuBtn = styled.button`
  width: 45px;
  margin-left: 10px;
  height: 35px;
  background: rgb(220, 237, 255);
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const MenuBtnLong = styled.button`
  width: 60px;
  margin-left: 10px;
  height: 35px;
  background: rgb(220, 237, 255);
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const PostWrap = styled.div`
  width: 480px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #94cef2;
  border: 3px solid white;
  border-radius: 10px;
`;

export const PostBox = styled.div`
  width: 450px;
  height: 650px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
`;

export const PostBoxSelect = styled.div`
  width: 450px;
  height: 650px;
  margin: 20px auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
`;

export const PostInfo = styled.div`
  width: 450px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const PostInfoLeft = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  flex-direction: row;
`;

export const PostInfoPhoto = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${토끼});
  background-size: cover;
`;

export const PostInfoRight = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const PostBtn = styled.button`
  width: 45px;
  margin-left: 5px;
  height: 35px;
  background-color: #94cef2;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;
type layoutStyle = {
  layoutStyle: string;
};
export const PostImg = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  position: relative;
  flex-direction: ${(props: layoutStyle) => props.layoutStyle};
`;

export const PostHeartLine = styled.div`
  width: 430px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostText = styled.div`
  width: 450px;
  max-height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const ImgPreviewBox = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  border: 1px solid #94cef2;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  background-repeat: 0;
  background-size: cover;
`;

export const TextInput = styled.textarea`
  margin: 10px auto;
  width: 430px;
  height: 100px;
  background: rgb(220, 237, 255);
  color: #1f487d;
  border: 1px solid white;
  border-radius: 10px;
  overflow-y: auto;
  padding: 10px;
`;

export const PhotoAddBtn = styled.button`
  width: 80px;
  height: 35px;
  background-color: #94cef2;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const PhotoAddLabel = styled.label`
  width: 80px;
  height: 35px;
  background-color: #94cef2;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
`;

export const UploadBtn = styled.button`
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

export const DeleteBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #94cef2;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const ShowModalBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 20px auto 0 auto;
  background-color: #bfa9f7;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #7051be;
  }
`;

export const PostUploadBox = styled.div`
  width: 100px;
  height: 120px;
  background-color: #94cef2;
  border: 3px solid white;
  border-radius: 15px;
  position: fixed;
  top: 70%;
  margin-left: 85%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const PostUploadDiv = styled.div`
  width: 90px;
  height: 50px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
`;
