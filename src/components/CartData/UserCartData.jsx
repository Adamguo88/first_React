import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function UserCartData() {
  const {
    cart,
    cartAdd,
    cartUncrease,
    careRemove,
    cartCheckBox,
    cartAllBuy,
    cart_all_checkbox,
    total,
    product,
  } = useGlobalContext();

  const payMoney = () => {
    if (window.confirm("您確定是否購買嗎?")) alert("購買成功");
    else {
      alert("取消購買");
    }
  };
  return (
    <div className="cart_header">
      <div className="cart_allICheckbox">
        <div className="cart_CheckBtn">
          <input
            className="form-check-input"
            type="checkbox"
            checked={cart_all_checkbox}
            onChange={cartAllBuy}
          />
        </div>
        <div className="cart_product_name">
          <p>商品</p>
        </div>
        <div className="cart_product_singlePrice">
          <p>單價</p>
        </div>
        <div className="cart_product_allAmount">
          <p>數量</p>
        </div>
        <div className="cart_product_allPrice">
          <p>總價</p>
        </div>
        <div className="cart_product_control">
          <p>操控</p>
        </div>
      </div>
      <div className="User_final_check_cart">
        {cart.map((item) => {
          const {
            id,
            image,
            introduction,
            name,
            price,
            amount,
            type,
            isChecked,
          } = item;
          return (
            <div className="show_data" key={id}>
              <div className="Cart_CheckBtn">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => cartCheckBox(id)}
                />
              </div>
              <div className="cart_product_Img">
                <img src={image} alt={introduction} />
              </div>
              <div className="cart_introduction">
                <Link to="/menu" className="cart_a">
                  {name}
                </Link>
              </div>
              <div className="cart_type">
                <p>分類 :</p>
                <span>{type}</span>
              </div>
              <div className="cart_price">
                <p>$ {price}</p>
              </div>
              <div className="cart_control_btn">
                <button className="btn btn-success" onClick={() => cartAdd(id)}>
                  <FaPlus />
                </button>
                <span style={{ padding: "0 15px" }}>{amount}</span>
                <button
                  className="btn btn-success"
                  onClick={() => cartUncrease(id)}
                >
                  <FaMinus />
                </button>
              </div>
              <div className="cart_price_total">$ {amount * price}</div>
              <div className="cart_remove">
                <button
                  className="btn btn-danger"
                  onClick={() => careRemove(id)}
                >
                  刪除
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="User_checkout">
        <div className="cart_checkout_control">
          <div className="Checkout_All_Checked">
            <input
              className="form-check-input"
              type="checkbox"
              checked={cart_all_checkbox}
              onChange={cartAllBuy}
            />
            <div style={{ paddingLeft: "35px" }}>
              <button className="btn btn-primary" onClick={cartAllBuy}>
                全選
              </button>
            </div>
          </div>
          <div className="Checkout_Total_Price">
            <span style={{ fontSize: "28px", paddingRight: "20px" }}>
              總金額 ({product} 個產品) $ {total} 元
            </span>
            <button className="btn btn-success" onClick={payMoney}>
              去買單
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
