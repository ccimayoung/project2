import React from "react";
import { AW, PostBox } from "../Styles/AllStyle";
import PostWrite_Center from "../components/PostLayout/PostWrite_Center";
import { ModalBtnBox } from "../Styles/modal";
import OrderList from "../components/OrderList";
import PostWrite_side from "../components/PostLayout/PostWrite_side";

import { useRecoilState } from "recoil";
import { layoutState } from "../recoil/store";
import { Menu } from "antd";

function PostAdd() {
  const [selectLayout] = useRecoilState(layoutState);

  return (
    <AW>
      <Menu />
      <ModalBtnBox style={{ marginTop: 100 }}>
        <OrderList />
      </ModalBtnBox>

      {selectLayout === 1 ? (
        <PostWrite_Center />
      ) : selectLayout === 2 ? (
        <PostWrite_side />
      ) : selectLayout === 3 ? (
        <PostWrite_side />
      ) : (
        <PostBox>레이아웃을 선택해주세요</PostBox>
      )}
    </AW>
  );
}

export default PostAdd;
