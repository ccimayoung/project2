import {
  MenuWrap,
  MenuLeft,
  MenuBtn,
  MenuRight,
  MenuBtnLong,
} from "../Styles/AllStyle";

import { Title } from "../Styles/Font";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { registerApi } from "../Api/callApi";

function Menu() {
  const nav = useNavigate();

  const logoutUserData = useMutation(() => registerApi.logoutApi(), {
    onSuccess: (result) => {
      alert(result.data);
      console.log(result);
      localStorage.clear();
      nav("/");
    },
  });

  const logout = () => {
    logoutUserData.mutate();
  };

  const localToken = localStorage.getItem("recoil-persist");

  return (
    <div>
      <MenuWrap>
        <MenuLeft>
          <Title
            onClick={() => {
              nav("/");
            }}
          >
            TodayLog
          </Title>
        </MenuLeft>
        {localToken ? (
          <MenuRight>
            <MenuBtnLong onClick={logout}>Logout</MenuBtnLong>
          </MenuRight>
        ) : (
          <MenuRight>
            <MenuBtn
              onClick={() => {
                nav("/join");
              }}
            >
              Join
            </MenuBtn>
            <MenuBtn
              onClick={() => {
                nav("/login");
              }}
            >
              Login
            </MenuBtn>
          </MenuRight>
        )}
      </MenuWrap>
    </div>
  );
}

export default Menu;
