// ImagePicker.tsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";

const HeartAnimation = keyframes`
  0%{
    width:0;
    height:0;
    
  }
  50%{
    width:300px;
    height:300px;
  }
  100%{
    width:0;
    height:0;
  }
`;

const BigheartSpace = styled.div`
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: ${HeartAnimation} 1.5s ease-in-out alternate;
`;

function HeartAni() {
  return (
    <BigheartSpace>
      <FaHeart size="300" color="eb4b58" />
    </BigheartSpace>
  );
}

export default HeartAni;
