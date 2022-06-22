import React from "react";
import { AW, PostBox } from "../Styles/AllStyle";
import PostWriteCenter from "../components/PostLayout/PostWriteCenter";
import { ModalBtnBox } from "../Styles/modal";
import OrderList from "../components/OrderList";
import PostWriteSide from "../components/PostLayout/PostWriteSide";

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
        <PostWriteCenter />
      ) : selectLayout === 2 ? (
        <PostWriteSide />
      ) : selectLayout === 3 ? (
        <PostWriteSide />
      ) : (
        <PostBox>레이아웃을 선택해주세요</PostBox>
      )}
    </AW>
  );
}

export default PostAdd;
