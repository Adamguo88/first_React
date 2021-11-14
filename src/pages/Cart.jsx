import React from "react";
import UserCartData from "../components/CartData/UserCartData";
import { useGlobalContext } from "../context";
import "./css/cart.css";
export default function Cart() {
  const { cart } = useGlobalContext();
  return (
    <div className="CartData">
      <div className="My-Container">
        {cart.length > 0 ? (
          <UserCartData/>
        ) : (
          <div>目前購物車並沒有任何資料</div>
        )}
      </div>
    </div>
  );
}
