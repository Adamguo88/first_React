import React from "react";
import { useGlobalContext } from "../../context";
export default function Categories() {
  const { nowMenu,filterItem } = useGlobalContext();
  return (
    <div>
      {nowMenu.map((item, index) => {
        return (
          <button
            key={index}
            className="btn btn-success mb-3"
            style={{ width: "100%" }}
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
