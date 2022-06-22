import React, { ReactElement } from "react";
import { CheckFont, PostFontBold } from "../Styles/Font";

import {
  ModalBox,
  ModalCheckDiv,
  ModalCheckLayoutDiv,
  ModalLayout,
  ModalLayoutPhotoDiv,
  ModalMiddle,
  ModalTop,
  SelectBtn,
} from "../Styles/modal";
import ExPostCenter from "../assets/ExPostCenter.jpg";
import ExPostLeft from "../assets/ExPostLeft.jpg";
import ExPostRight from "../assets/ExPostRight.jpg";
import { useRecoilState } from "recoil";
import { layoutState } from "../recoil/store";

interface props {
  close: () => void; // 함수 타입 정의할 때
}

function ModalFormSelect(props: props): ReactElement {
  const { close } = props;

  const [, setSelectLayout] = useRecoilState(layoutState);

  return (
    <div>
      <ModalBox>
        <ModalTop>
          <PostFontBold marginTop={0} marginLeft={0}>
            🙂 원하는 레이아웃을 선택해주세요 🙂
          </PostFontBold>
          <CheckFont color={"black"}>
            <br />
            1:1 비율 이미지는 첫번째, 4:3 비율은 두번째와 세번째를 추천해요.
          </CheckFont>
        </ModalTop>
        <ModalMiddle>
          <ModalLayout>
            <ModalCheckLayoutDiv>
              <ModalLayoutPhotoDiv>
                <img src={ExPostCenter} width="180px" alt="" />
              </ModalLayoutPhotoDiv>
            </ModalCheckLayoutDiv>
            <ModalCheckDiv>
              <SelectBtn
                onClick={() => {
                  setSelectLayout(1);
                  close();
                }}
              >
                <PostFontBold marginLeft={"auto"} marginTop={"auto"}>
                  선택하기
                </PostFontBold>
              </SelectBtn>
            </ModalCheckDiv>
          </ModalLayout>

          <ModalLayout>
            <ModalCheckLayoutDiv>
              <ModalLayoutPhotoDiv>
                <img src={ExPostLeft} width="180px" alt="" />
              </ModalLayoutPhotoDiv>
            </ModalCheckLayoutDiv>
            <ModalCheckDiv>
              <SelectBtn
                onClick={() => {
                  close();
                  setSelectLayout(2);
                }}
                name="second"
              >
                <PostFontBold marginLeft={"auto"} marginTop={"auto"}>
                  선택하기
                </PostFontBold>
              </SelectBtn>
            </ModalCheckDiv>
          </ModalLayout>

          <ModalLayout>
            <ModalCheckLayoutDiv>
              <ModalLayoutPhotoDiv>
                <img src={ExPostRight} width="180px" alt="" />
              </ModalLayoutPhotoDiv>
            </ModalCheckLayoutDiv>
            <ModalCheckDiv>
              <SelectBtn
                onClick={() => {
                  close();
                  setSelectLayout(3);
                }}
                name="third"
              >
                <PostFontBold marginLeft={"auto"} marginTop={"auto"}>
                  선택하기
                </PostFontBold>
              </SelectBtn>
            </ModalCheckDiv>
          </ModalLayout>
        </ModalMiddle>
      </ModalBox>
    </div>
  );
}

export default ModalFormSelect;
