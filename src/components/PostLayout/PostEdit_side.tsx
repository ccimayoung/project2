import React, { useState, useRef } from "react";
import {
  DeleteBtn,
  PostInfo,
  PostInfoLeft,
  PostInfoPhoto,
  PostInfoRight,
  UploadBtn,
} from "../../Styles/AllStyle";
import { PostFontBold, PostFontLight } from "../../Styles/Font";
import {
  Img,
  ImgLable,
  PostBoxSelectSide,
  PostImgSide,
  PostImgSideDiv,
  PostTextSidetDiv,
  TextInputSide,
  UploadBtnDisable,
} from "../../Styles/Post_left,Right";
import { useLocation, useNavigate } from "react-router-dom";
import { PostWriteWrap } from "../../Styles/modal";
import { useRecoilState } from "recoil";
import { layoutState } from "../../recoil/store";
import { Post } from "../../Types/Interface";
import { useMutation } from "react-query";
import { boardApi } from "../../Api/callApi";

function PostEdit_side() {
  const nav = useNavigate();

  const location = useLocation();
  const state = location.state as { oripost: Post };
  const [selectLayout] = useRecoilState(layoutState);
  // 밖에서 selectLayout 바꿈

  const img: any = useRef();
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const [text, setText] = useState(state.oripost.content);
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState({
    img_show: state.oripost.img_url,
    img_file: "",
  });

  // 파일 저장
  const saveFileImage = (e: any) => {
    setFileImage({
      img_show: URL.createObjectURL(e.target.files[0]),
      img_file: e.target.files[0],
    });
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage.img_show);
    setFileImage({
      img_show: "",
      img_file: "",
    });
  };

  const onSubmit = () => {
    const formData = new FormData();
    if (fileImage && text) {
      formData.append("img", fileImage.img_file);
      formData.append("layoutType", selectLayout.toString());
      formData.append("content", text);
    }
    editUserData.mutate(formData);
  };

  const editUserData = useMutation(
    (formData: FormData) => boardApi.editApi(state.oripost.id, formData),
    {
      onSuccess: () => {
        nav("/");
      },
    }
  );

  return (
    <PostWriteWrap>
      <PostBoxSelectSide>
        <PostInfo>
          <PostInfoLeft>
            <PostInfoPhoto></PostInfoPhoto>
            <PostFontBold marginTop={0} marginLeft={5}>
              ayoung
            </PostFontBold>
          </PostInfoLeft>
          <PostInfoRight>
            <ImgLable
              htmlFor="img"
              style={{
                marginTop: "10px",
                alignItems: "center",
                display: "flex",
              }}
            >
              <PostFontLight style={{ margin: "auto" }}>
                사진 업로드
              </PostFontLight>
            </ImgLable>
            <input
              id="img"
              type="file"
              ref={img}
              accept="image/*"
              onChange={saveFileImage}
              style={{ display: "none" }}
            />
            {fileImage ? (
              <DeleteBtn
                onClick={() => {
                  deleteFileImage();
                  img.current.value = "";
                }}
              >
                삭제
              </DeleteBtn>
            ) : (
              ""
            )}
          </PostInfoRight>
        </PostInfo>
        <PostImgSideDiv
          layoutStyle={selectLayout === 2 ? "row-reverse" : "row"}
        >
          <PostTextSidetDiv>
            <TextInputSide
              value={text}
              onChange={onChange}
              placeholder="오늘의 기록 남기기"
            ></TextInputSide>
          </PostTextSidetDiv>
          <PostImgSide>
            {fileImage ? (
              ""
            ) : (
              <PostFontLight style={{ margin: "auto" }}>
                {" "}
                "📷사진 업로드를 클릭!"{" "}
              </PostFontLight>
            )}
            {fileImage && (
              <Img
                alt="sample"
                src={fileImage.img_show}
                style={{ margin: "auto" }}
              />
            )}
          </PostImgSide>
        </PostImgSideDiv>

        {fileImage && text ? (
          <UploadBtn onClick={onSubmit}>💙수정완료💙</UploadBtn>
        ) : (
          <UploadBtnDisable>수정완료</UploadBtnDisable>
        )}
      </PostBoxSelectSide>
    </PostWriteWrap>
  );
}

export default PostEdit_side;
