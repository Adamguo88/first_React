import React from "react";
import Myloading from "../components/Loading/Logading";
import Categories from "../components/Menu/Categories";
import MenuData from "../components/Menu/MenuData";
import { useGlobalContext } from "../context";

import "./css/menu.css";

export default function Menu() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Myloading></Myloading>;
  }
  return (
    <div className="Menu-page">
      <div className="Menu-box">
        <div className="categories">
          <Categories></Categories>
        </div>
        <section className="chooice-restaurant">
          <MenuData></MenuData>
        </section>
      </div>
    </div>
  );
}
