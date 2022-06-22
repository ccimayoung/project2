import React from "react";
import { PostWrap, AW, PostUploadBox } from "../Styles/AllStyle";
import { BsInstagram } from "react-icons/bs";
import { PostFontBold, TitleFont } from "../Styles/Font";
import { useNavigate } from "react-router-dom";
import { postListState } from "../recoil/store";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import axios from "axios";
import Menu from "../components/Menu";
import PostCenter from "../components/PostLayout/PostCenter";
import PostSide from "../components/PostLayout/PostSide";

const getPostList = () => {
  return axios.get("http://13.209.65.162/api/boards");
};

function Board() {
  const nav = useNavigate();
  const [postList, setPostList] = useRecoilState(postListState);

  const getpost_query = useQuery("post_list", getPostList, {
    //여기서 리코일에 저장
    onSuccess: (data: any) => {
      setPostList(data.data);
      console.log(getpost_query);
    },
  });

  return (
    <AW>
      <Menu />
      <PostWrap>
        {postList.map((Post, id) => {
          return Post.layoutType === 1 ? (
            <PostCenter key={id} num={id} />
          ) : Post.layoutType === 2 ? (
            <PostSide key={id} num={id} />
          ) : (
            <PostSide key={id} num={id} />
          );
        })}
      </PostWrap>
      <PostUploadBox
        onClick={() => {
          nav("/postadd");
        }}
      >
        <TitleFont fontSize={15} marginTop={20} marginBottom={0}>
          TodayLog
        </TitleFont>
        <PostFontBold
          marginLeft={0}
          marginTop={5}
          style={{ marginBottom: "10px" }}
        >
          기록하기
        </PostFontBold>

        <BsInstagram size="30" color="white" />
      </PostUploadBox>
    </AW>
  );
}

export default Board;
