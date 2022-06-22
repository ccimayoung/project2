import React, { useState, useRef } from "react";
import {} from "../Styles/AllStyle";

import { CheckFont } from "../Styles/Font";
import {
  InputInfo,
  InputInfoBox,
  CheckTextDiv,
  TextDiv,
  JoinBtn,
  JoinBtnDisable,
} from "../Styles/Join,Login";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";

// 보내기
interface addSign {
  nickname: String;
  email: String;
  password: String;
}
const postaddsign = (addSign: addSign) => {
  return axios
    .post("http://13.209.65.162/api/signup", addSign)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export function JoinInfo() {
  const { mutate } = useMutation((addSign: addSign) => postaddsign(addSign), {
    onSuccess: () => {
      nav("/");
    },
  });

  const rePass: any = useRef();
  const CheckEmail = (asValue: any) => {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  };
  const CheckPassword = (asValue: any) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    return regExp.test(asValue);
  };
  const [email, setNameText] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const onChange1 = (e: any) => {
    setNameText(e.target.value);
  };
  const onChange2 = (e: any) => {
    setPassword(e.target.value);
  };
  const onChange3 = (e: any) => {
    setPassword2(e.target.value);
  };
  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
  };
  const nav = useNavigate();

  return (
    <div>
      <InputInfoBox heightSize={350}>
        <TextDiv>
          {email ? <CheckFont color={"black"}>이메일</CheckFont> : ""}
        </TextDiv>
        <InputInfo
          type="text"
          placeholder="이메일을 입력하세요"
          name="email"
          value={email}
          onChange={onChange1}
        ></InputInfo>
        <CheckTextDiv>
          {email ? (
            CheckEmail(email) ? (
              <CheckFont color={"blue"}>사용 가능한 이메일 입니다.</CheckFont>
            ) : (
              <CheckFont color={"red"}>이메일을 확인해 주세요.</CheckFont>
            )
          ) : (
            <CheckFont color={"black"}>
              이메일은 영문과 숫자와 일부 특수문자(._-)만 입력 가능합니다.
            </CheckFont>
          )}
        </CheckTextDiv>
        <TextDiv>
          {nickname ? <CheckFont color={"black"}>닉네임</CheckFont> : ""}
        </TextDiv>
        <InputInfo
          type="text"
          placeholder="닉네임을 입력하세요"
          name="nickname"
          value={nickname}
          onChange={onChangeNickname}
        ></InputInfo>
        <TextDiv>
          {password ? <CheckFont color={"black"}>비밀번호</CheckFont> : ""}
        </TextDiv>
        <InputInfo
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="passward"
          value={password}
          onChange={onChange2}
        ></InputInfo>
        <CheckTextDiv>
          {password ? (
            CheckPassword(password) ? (
              <CheckFont color={"blue"}>
                사용 가능한 비밀번호입니다.
                <br />
              </CheckFont>
            ) : (
              <CheckFont color={"red"}>
                비밀번호를 확인해 주세요.
                <br />
              </CheckFont>
            )
          ) : (
            <CheckFont color={"black"}>
              영문과 숫자 조합의 8-20자의 비밀번호를 설정해주세요.
              <br />
              특수문자(!@#$%^&*)도 사용 가능합니다.
            </CheckFont>
          )}
        </CheckTextDiv>
        <TextDiv>
          {password2 ? (
            <CheckFont color={"black"}>비밀번호 재입력</CheckFont>
          ) : (
            ""
          )}
        </TextDiv>
        <InputInfo
          type="password"
          placeholder="비밀번호를 확인하세요"
          name="passward2"
          value={password2}
          onChange={onChange3}
          ref={rePass}
        ></InputInfo>
        <CheckTextDiv>
          {password2 ? (
            password === password2 ? (
              <CheckFont color={"blue"}>비밀번호가 일치합니다.</CheckFont>
            ) : (
              <CheckFont color={"red"}>비밀번호가 일치하지 않습니다.</CheckFont>
            )
          ) : (
            <CheckFont color={"black"}>
              비밀번호를 다시 입력해 주세요.
            </CheckFont>
          )}
        </CheckTextDiv>
      </InputInfoBox>

      {CheckPassword(password) &&
      CheckEmail(email) &&
      password === password2 ? (
        <JoinBtn
          onClick={() => {
            const addSign = {
              nickname: nickname,
              email: email,
              password: password,
            };
            mutate(addSign);
          }}
        >
          <h2>🙂Join🙂</h2>
        </JoinBtn>
      ) : (
        <JoinBtnDisable>
          <h2>😟Join😟</h2>
        </JoinBtnDisable>
      )}
    </div>
  );
}

export default JoinInfo;
