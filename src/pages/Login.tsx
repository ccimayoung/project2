import { useEffect, useState } from "react";

import { BW } from "../Styles/AllStyle";
import { CheckFont, FontBig, PostFontBold } from "../Styles/Font";
import {
  InputInfoBox,
  InputLogin,
  JoinBtn,
  JoinBtnDisable,
  JoinWrap,
  LoginBox,
  LoginSmallWrap,
  TextDiv,
} from "../Styles/Join,Login";
import login_img from "../assets/login_img.jpg";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenState } from "../recoil/store";
import { registerApi } from "../Api/callApi";
import { FieldValues } from "react-hook-form";
import { Menu } from "antd";

function Login() {
  const localToken = localStorage.getItem("recoil-persist");

  const loginToken = useSetRecoilState(tokenState);
  const tokenUse = useRecoilValue(tokenState);

  const loginUserData = useMutation(
    (data: FieldValues) => registerApi.loginApi(data),
    {
      onSuccess: (token) => {
        loginToken(token.data);
        console.log(tokenUse);
        alert("로그인 성공!");
        nav("/");
      },
      onError: () => {
        alert("아이디, 비밀번호를 확인해주세요");
      },
    }
  );

  const Login = (data: FieldValues) => {
    loginUserData.mutate(data);
  };

  const [email, setNameText] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChange1 = (e: any) => {
    setNameText(e.target.value);
  };
  const onChange2 = (e: any) => {
    setPassword(e.target.value);
  };
  const nav = useNavigate();
  useEffect(() => {
    //useEffect 리턴 바로 위에 써주기.
    if (localToken) {
      alert("🙅🏻‍♀️이미 로그인이 되어있습니다🙅🏻‍♀️");
      nav("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(loginToken);
  return (
    <BW>
      <Menu />
      <JoinWrap>
        <img src={login_img} width="330px" alt="" />
        <LoginSmallWrap>
          <LoginBox heightSize={400}>
            <FontBig>로그인</FontBig>
            <TextDiv>
              {email ? <CheckFont color={"black"}>이메일</CheckFont> : ""}
            </TextDiv>
            <InputInfoBox heightSize={150}>
              <InputLogin
                type="text"
                placeholder="이메일을 입력하세요"
                name="email"
                value={email}
                onChange={onChange1}
              ></InputLogin>
              <TextDiv>
                {password ? (
                  <CheckFont color={"black"}>비밀번호</CheckFont>
                ) : (
                  ""
                )}
              </TextDiv>
              <InputLogin
                placeholder="비밀번호를 입력하세요"
                type="password"
                value={password}
                onChange={onChange2}
              ></InputLogin>
            </InputInfoBox>
            {email && password ? (
              <JoinBtn
                onClick={() => {
                  const goLogin = {
                    email: email,
                    password: password,
                  };
                  Login(goLogin);
                }}
              >
                <h2>🙂Login🙂</h2>
              </JoinBtn>
            ) : (
              <JoinBtnDisable>
                <h2>😟Login😟</h2>
              </JoinBtnDisable>
            )}
          </LoginBox>
          <LoginBox heightSize={150}>
            <PostFontBold marginTop={0} marginLeft={0}>
              🙄계정이 없다면?
            </PostFontBold>
            <JoinBtn
              onClick={() => {
                nav("/join");
              }}
            >
              <h3>가입하러 가기</h3>
            </JoinBtn>
          </LoginBox>
        </LoginSmallWrap>
      </JoinWrap>
    </BW>
  );
}

export default Login;
