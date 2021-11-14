import React from "react";
import { useGlobalContext } from "../../context";
import { FaPlus, FaMinus } from "react-icons/fa";
export default function MenuData() {
  const { afterList,add,unCrease,addToCart } = useGlobalContext();
  return (
    <>
      {afterList.map((item) => {
        const { id, price, image, amount, name, introduction, kcal } = item;
        return (
          <div className="restaurant" key={id}>
            <img src={image} alt={(name, introduction)} />
            <div className="meals-text">
              <span>{name}</span>
              <span>kcal : {kcal}</span>
            </div>
            <p>價格 : {price}TWD</p>
            <div className="control-amount">
              <div className="amount">
                <button className="btn btn-light" onClick={() => add(id)}>
                  <FaPlus></FaPlus>
                </button>
                <span>{amount}</span>
                <button className="btn btn-light" onClick={() => unCrease(id)}>
                  <FaMinus></FaMinus>
                </button>
              </div>
              <button className="btn btn-dark" onClick={() => addToCart(id)}>加入購物車</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
