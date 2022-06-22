// ImagePicker.tsx
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../data/Images";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`;

const ArrowBox = styled.div`
  width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Arrow = styled.div<{ isLeft: boolean }>`
  width: 35px;
  height: 35px;
  border: 2px solid;
  &:hover {
    background-color: rgba(220, 237, 255, 0.8);
  }
  border-radius: 50%;
  ${(props) => (props.isLeft ? "left: 5px" : "right: 5px")};
  /* transform: translate(-5px, -50%); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

const ImagePicker = (): JSX.Element => {
  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링

  // 왼쪽 화살표 클릭
  const handlePrevClick = useCallback((): void => {
    if (pickIndex <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면

      setPickIndex(images.length - 1);
      // length의 -1로 지정하여 가장 마지막으로 이동한다.

      return;
    }

    setPickIndex(pickIndex - 1);
    // 인덱스 감소
  }, [pickIndex]);

  // 오른쪽 화살표 클릭
  const handleNextClick = useCallback((): void => {
    if (pickIndex + 1 === images.length) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면

      setPickIndex(0);
      // 0으로 설정하여 가장 첫번째로 이동

      return;
    }

    setPickIndex(pickIndex + 1);
    // 인덱스 증가
  }, [pickIndex]);

  return (
    <Container>
      <FillImage src={images[pickIndex]}></FillImage>

      {/* pickIndex라는 state 변수를 이용하여 그에 맞는 이미지 렌더링 */}
      <ArrowBox>
        <Arrow isLeft={true} onClick={handlePrevClick}>
          <AiOutlineArrowLeft />
        </Arrow>

        <Arrow isLeft={false} onClick={handleNextClick}>
          <AiOutlineArrowRight />
        </Arrow>
      </ArrowBox>
    </Container>
  );
};

export default ImagePicker;
