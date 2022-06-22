import styled from "styled-components";

export const ModalBtnBox = styled.div`
  margin: 100px auto 0px auto;
`;

export const ModalWrap = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const PostWriteWrap = styled.div`
  width: 480px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #94cef2;
  border: 3px solid white;
  border-radius: 10px;
`;

export const ModalBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
`;

export const ModalSection = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
`;

export const ModalHeader = styled.section`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`;

export const ModalHeaderBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
`;

export const ModalMain = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

export const ModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`;

export const ModalFooterBtn = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
`;

export const OpenModal = styled.div`
  display: flex;
  align-items: center;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-bg-show 0.3s;
`;

// const ModalShow = keyframes`
// from {
//       opacity: 0;
//       margin-top: -50px;
//     }
//     to {
//       opacity: 1;
//       margin-top: 0;}
// `;

// const ModalBgShow = keyframes`

// from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//     `;

export const ModalBox = styled.div`
  width: 650px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
`;

export const ModalTop = styled.div`
  width: 650px;
  margin: 30px auto;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bfa9f7;
`;

export const ModalMiddle = styled.div`
  width: 650px;
  margin: 10px auto 30px auto;
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* background-color: #f2e194; */
`;

export const ModalLayout = styled.div`
  width: 180px;
  margin: auto;
  height: 340px;
  display: flex;
  flex-direction: column;
  /* background-color: #bfa9f7; */
  padding: 8px;
  border: 2px solid #bfa9f7;
  border-radius: 10px;
`;

export const SelectBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #bfa9f7;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: #7051be;
  }
`;

export const ModalCheckLayoutDiv = styled.div`
  width: 180px;
  height: 300px;

  display: flex;
`;

export const ModalLayoutPhotoDiv = styled.div`
  width: 180px;
  margin: auto;
`;

export const ModalCheckDiv = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;
