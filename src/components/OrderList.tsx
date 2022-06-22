import React from "react";
import { ReactElement, useState } from "react";
import { ShowModalBtn } from "../Styles/AllStyle";
import OrderModal from "./OrderModal";

const OrderList = (): ReactElement => {
  const [showReq, setShowReq] = useState<boolean>(false);
  function openReq() {
    setShowReq(!showReq);
  }
  function closeReq() {
    setShowReq(!showReq);
  }

  return (
    <div>
      <ShowModalBtn className="request_btn" onClick={openReq}>
        레이아웃 선택
      </ShowModalBtn>
      <OrderModal open={showReq} close={closeReq} />
    </div>
  );
};

export default OrderList;
