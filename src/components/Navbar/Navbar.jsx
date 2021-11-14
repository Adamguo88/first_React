import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-header">
      <div className="navbar-list">
        <div className="navbar-logo">
          <Link to="/">
            <h3>React-Sample-Project</h3>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="list-li">
            <Link className="list-a" to="/">
              首頁
            </Link>
          </li>
          <li className="list-li">
            <Link className="list-a" to="/menu">
              菜單
            </Link>
          </li>
          <li className="list-li">
            <Link className="list-a" to="/about">
              關於我們
            </Link>
          </li>
          <li className="list-li">
            <Cart />
          </li>
        </ul>
      </div>
    </div>
  );
}
