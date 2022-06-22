import styled from "styled-components";

export const JoinWrap = styled.div`
  width: 750px;
  height: 550px;
  margin: 120px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LoginSmallWrap = styled.div`
  width: 300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const JoinBox = styled.div`
  width: 300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 3px solid white;
  border-radius: 10px;
`;
interface aa {
  heightSize: number;
}
export const LoginBox = styled.div`
  width: 300px;
  height: ${(props: aa) => props.heightSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 3px solid white;
  border-radius: 10px;
`;

interface ff {
  heightSize: number;
}

export const InputInfoBox = styled.div`
  width: 300px;
  height: ${(props: ff) => props.heightSize}px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const InputInfo = styled.input`
  width: 270px;
  height: 40px;
  display: flex;
  flex-direction: column;
  background-color: rgb(220, 237, 255);
  border: 2px solid white;
  border-radius: 10px;
  color: #1f487d;
  padding: 0 0 0 5px;

  margin: 0px auto 3px auto;
`;

export const InputLogin = styled.input`
  width: 270px;
  height: 40px;
  margin: 0px auto 15px auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(220, 237, 255);
  border: 2px solid white;
  border-radius: 10px;
  color: #1f487d;
  padding: 0 0 0 5px;
`;

export const TextDiv = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin: 15px auto 0px 15px;
`;

export const CheckTextDiv = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin: 0px auto 0px 15px;
`;

export const JoinBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #94cef2;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: #1763a6;
  }
`;

export const JoinBtnDisable = styled.button`
  width: 200px;
  height: 50px;
  background-color: #757b7e;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
