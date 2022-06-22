import React, { useState } from "react";
import {
  PostImg,
  PostBtn,
  PostHeartLine,
  PostInfo,
  PostInfoLeft,
  PostInfoPhoto,
  PostInfoRight,
} from "../../Styles/AllStyle";

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { PostFontBold, PostFontLight } from "../../Styles/Font";
import { useNavigate } from "react-router-dom";
import HeartAni from "../HeartAni";
import {
  PostBoxSide,
  PostImgSide,
  PostTextSide,
  PostTextSidetDiv,
} from "../../Styles/Post_left,Right";
import { postListState } from "../../recoil/store";
import { useRecoilState } from "recoil";
import { useMutation, useQueryClient } from "react-query";
import { boardApi } from "../../Api/callApi";
import Swal from "sweetalert2";
import { jwtUtils } from "../../utils/jwtUtils";

interface props {
  num: number;
}

function PostSide(props: props) {
  const [postList] = useRecoilState(postListState);

  const { num } = props;
  const nav = useNavigate();

  const [heart, setHeart] = useState(false);

  const queryClient = useQueryClient();

  const onDelete = (id: number) => {
    deleteUserData.mutate(id);
  };

  const deleteUserData = useMutation((Id: number) => boardApi.deleteApi(Id), {
    onSuccess: () => {
      queryClient.invalidateQueries("post_list");
    },
  });

  const heartplusUserData = useMutation((Id: number) => boardApi.likeApi(Id), {
    onSuccess: () => {
      queryClient.invalidateQueries("post_list");
    },
  });

  const heartdeleteUserData = useMutation(
    (Id: number) => boardApi.unlikeApi(Id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("post_list");
      },
    }
  );

  const Like = (Id: number) => {
    heartplusUserData.mutate(Id);
  };

  const unLike = (Id: number) => {
    heartdeleteUserData.mutate(Id);
  };

  const localToken = localStorage.getItem("recoil-persist");
  // console.log(localToken);
  // if (localToken) {
  //   const toto = JSON.parse(localToken);
  //   // console.log(toto);
  //   // console.log(jwtUtils.userId(toto.tokenState));
  // }

  const deletePopup = (id: number) => {
    Swal.fire({
      title: "😥 진짜 지울거에요?? 😥",
      text: "삭제를 누르면 영구 삭제됩니다",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1763a6",
      cancelButtonColor: "#f23847",
      confirmButtonText: "삭제!",
      cancelButtonText: "취소",
    }).then((result) => {
      onDelete(id);
      if (result.isConfirmed) {
        Swal.fire("삭제!", "삭제 완료되었습니다.", "success");
      }
    });
  };

  return (
    <div>
      {postList.map((v, i) => {
        return num === i ? (
          <PostBoxSide key={v.id}>
            <PostInfo>
              <PostInfoLeft>
                <PostInfoPhoto></PostInfoPhoto>
                <PostFontBold marginTop={"auto"} marginLeft={5}>
                  {v.nickname}
                </PostFontBold>
              </PostInfoLeft>
              {localToken &&
              v.userId ===
                jwtUtils.userId(JSON.parse(localToken).tokenState) ? (
                <PostInfoRight>
                  <PostBtn
                    onClick={() => {
                      nav("/postedit/" + v.id, { state: { oripost: v } });
                    }} //보낼때는 형식 필요없음. oripost 뒤가 보내는 값
                  >
                    수정
                  </PostBtn>
                  <PostBtn
                    className="request_btn"
                    onClick={() => deletePopup(v.id)}
                  >
                    삭제
                  </PostBtn>
                </PostInfoRight>
              ) : null}
            </PostInfo>
            <PostImg layoutStyle={v.layoutType === 2 ? "row-reverse" : "row"}>
              {heart ? <HeartAni /> : null}
              <PostTextSidetDiv>
                <PostTextSide>
                  <PostFontLight>
                    <b>{v.nickname}</b> {v.content}
                  </PostFontLight>
                </PostTextSide>
              </PostTextSidetDiv>
              <PostImgSide>
                <div>
                  <img src={v.img_url} width="250px" alt="" />
                </div>
              </PostImgSide>
            </PostImg>
            <PostHeartLine>
              <PostFontLight>
                <b>{v.likes.length}</b>명이 좋아합니다.
              </PostFontLight>
              {localToken &&
              v.likes.includes(
                jwtUtils.userId(JSON.parse(localToken).tokenState)
              ) ? (
                <FaHeart
                  onClick={() => {
                    unLike(v.id);
                    setHeart(false);
                  }}
                  size="25"
                  color="#eb4b58"
                ></FaHeart>
              ) : localToken ? (
                <FiHeart
                  onClick={() => {
                    Like(v.id);
                    setHeart(true);
                  }}
                  size="25"
                  color="#eb4b58"
                ></FiHeart>
              ) : (
                <FiHeart
                  onClick={() => {
                    alert("로그인 후 이용 가능합니다");
                  }}
                  size="25"
                  color="#eb4b58"
                ></FiHeart>
              )}
            </PostHeartLine>
          </PostBoxSide>
        ) : null;
      })}
    </div>
  );
}

export default PostSide;
