import React, { useEffect } from "react";
import { AW, PostBox } from "../Styles/AllStyle";
import { useLocation } from "react-router-dom";
import { ModalBtnBox } from "../Styles/modal";
import OrderList from "../components/OrderList";
import { useRecoilState } from "recoil";
import { layoutState } from "../recoil/store";
import { Post } from "../Types/Interface";
import { Menu } from "antd";
import PostEditCenter from "../components/PostLayout/PostEditCenter";
import PostEditSide from "../components/PostLayout/PostEditSide";

function PostAdd() {
  const location = useLocation();
  const state = location.state as { oripost: Post };
  console.log(state);

  const [selectLayout, setSelectLayout] = useRecoilState(layoutState); //마지막에 저장한거 나옴
  useEffect(() => {
    setSelectLayout(state.oripost.layoutType); //받은 레이아웃타입으로 바꿔주고 실행...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AW>
      <Menu />
      <ModalBtnBox style={{ marginTop: 100 }}>
        <OrderList />
      </ModalBtnBox>
      {selectLayout === 1 ? (
        <PostEditCenter />
      ) : selectLayout === 2 ? (
        <PostEditSide />
      ) : selectLayout === 3 ? (
        <PostEditSide />
      ) : (
        <PostBox>레이아웃을 선택해주세요</PostBox>
      )}
    </AW>
  );
}

export default PostAdd;
