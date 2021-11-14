import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./cart.css";
export default function Cart() {
  const { cart } = useGlobalContext();
  const [isOpenCart, setIsOpenCart] = useState(false);
  let history = useHistory();

  const openCart = () => {
    setIsOpenCart(true);
  };
  const togohistory = () => {
    history.push("/cart");
    setIsOpenCart(false);
  };

  return (
    <div className="shop_cart">
      <button className="btn">
        <div className="cart_icon" onClick={() => openCart(true)}>
          <FaShoppingCart></FaShoppingCart>
        </div>
      </button>
      <div className="cart_total">
        <span>{cart.length}</span>
      </div>
      {isOpenCart && (
        <div className="cart_Data">
          {cart.length <= 0 ? (
            <div className="nothing_data">
              <span>沒資料</span>
            </div>
          ) : (
            <>
              <div className="cart_list">
                {cart.map((item, index) => {
                  return (
                    <div className="user_carts_data" key={index}>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  );
                })}
              </div>
              <div className="check_cart">
                <button
                  className="btn btn-warning"
                  onClick={() => togohistory()}
                >
                  查看購物車
                </button>
              </div>
            </>
          )}
          <div className="close_cart">
            <button
              className="btn btn-danger"
              onClick={() => setIsOpenCart(false)}
            >
              <FaTimes></FaTimes>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
