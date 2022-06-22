import React, { useState } from "react";
import {
  PostBox,
  PostImg,
  PostBtn,
  PostHeartLine,
  PostText,
  PostInfo,
  PostInfoLeft,
  PostInfoPhoto,
  PostInfoRight,
} from "./../../Styles/AllStyle";

import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { PostFontBold, PostFontLight } from "./../../Styles/Font";
import { useNavigate } from "react-router-dom";
import HeartAni from "../HeartAni";
import { postListState } from "../../recoil/store";
import { useRecoilState } from "recoil";
import { boardApi } from "../../Api/callApi";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { jwtUtils } from "../../utils/jwtUtils";

// const getPostList = (board: board) => {
//   return axios.get("http://13.209.65.162/api/boards");
// };

interface props {
  num: number;
}

function Post_Center(props: props) {
  const [postList] = useRecoilState(postListState);
  console.log(postList);

  const { num } = props;
  const nav = useNavigate();

  const [heart, setHeart] = useState(false);

  interface dd {
    count: number;
  }

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
          <PostBox key={v.id}>
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
            <PostImg layoutStyle="row">
              <img src={v.img_url} width="450px" />
              {heart ? <HeartAni /> : null}
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
            <PostText>
              <PostFontLight>
                <b>{v.nickname}</b> {v.content}
              </PostFontLight>
            </PostText>
          </PostBox>
        ) : null;
      })}
    </div>
  );
}

export default Post_Center;
