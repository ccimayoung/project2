import React, { useEffect } from "react";
import { BW } from "../Styles/AllStyle";
import { FontBig } from "../Styles/Font";
import { JoinBox, JoinWrap } from "../Styles/Join,Login";
import join_img from "../assets/join_img.jpg";
import { useNavigate } from "react-router-dom";
import JoinInfo from "../components/JoinInfo";
import { Menu } from "antd";

function Join() {
  const nav = useNavigate();

  const localToken = localStorage.getItem("recoil-persist");
  useEffect(() => {
    if (localToken) {
      alert("🙅🏻‍♀️이미 로그인이 되어있습니다🙅🏻‍♀️");
      nav("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BW>
      <Menu />
      <JoinWrap>
        <img src={join_img} width="330px" alt="" />
        <JoinBox>
          <FontBig>회원가입</FontBig>
          <JoinInfo></JoinInfo>
        </JoinBox>
      </JoinWrap>
    </BW>
  );
}

export default Join;
