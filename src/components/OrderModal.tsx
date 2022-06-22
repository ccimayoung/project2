import React, { ReactElement } from "react";
import { ModalBackground } from "../Styles/AllStyle";
import ModalFormSelect from "./ModalFormSelect";

interface props {
  open: boolean;
  close: () => void; // 함수 타입 정의할 때
}

const OrderModal = (props: props): ReactElement => {
  const { open, close } = props;

  console.log(open);

  return (
    <>
      {open ? (
        <ModalBackground onClick={close}>
          <div
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            {open ? <ModalFormSelect close={close} /> : null}
          </div>
        </ModalBackground>
      ) : null}
    </>
  );
};
export default OrderModal;
