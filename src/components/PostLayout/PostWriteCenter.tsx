import React, { useState, useRef } from "react";
import {
  DeleteBtn,
  ImgPreviewBox,
  PostBoxSelect,
  PostInfo,
  PostInfoLeft,
  PostInfoPhoto,
  PostInfoRight,
  TextInput,
  UploadBtn,
} from "../../Styles/AllStyle";
import { PostFontBold, PostFontLight } from "../../Styles/Font";
import { Img, ImgLable, UploadBtnDisable } from "../../Styles/Post_left,Right";
import { useNavigate } from "react-router-dom";
import { PostWriteWrap } from "../../Styles/modal";
import { useMutation } from "react-query";
import { boardApi } from "../../Api/callApi";

function PostWriteCenter() {
  const nav = useNavigate();

  const img: any = useRef();
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  const [text, setText] = useState();
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState({
    img_show: "",
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
      formData.append("layoutType", "1");
      formData.append("content", text);
    }
    writeUserData.mutate(formData);
  };

  const writeUserData = useMutation(
    (data: FormData) => boardApi.postWriteApi(data),
    {
      onSuccess: () => {
        nav("/");
      },
    }
  );

  return (
    <PostWriteWrap>
      <PostBoxSelect>
        <PostInfo>
          <PostInfoLeft>
            <PostInfoPhoto></PostInfoPhoto>
            <PostFontBold marginTop={0} marginLeft={5}></PostFontBold>
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
        <ImgPreviewBox>
          {fileImage.img_show ? (
            ""
          ) : (
            <PostFontLight style={{ margin: "auto" }}>
              {" "}
              "📷사진 업로드를 클릭!"{" "}
            </PostFontLight>
          )}
          {fileImage.img_show && (
            <Img
              alt="sample"
              src={fileImage.img_show}
              style={{ margin: "auto" }}
            />
          )}
        </ImgPreviewBox>
        <TextInput
          value={text}
          onChange={onChange}
          placeholder="내용을 입력하세요."
        ></TextInput>

        {fileImage && text ? (
          <UploadBtn onClick={onSubmit}>💙업로드💙</UploadBtn>
        ) : (
          <UploadBtnDisable>업로드</UploadBtnDisable>
        )}
      </PostBoxSelect>
    </PostWriteWrap>
  );
}

export default PostWriteCenter;
