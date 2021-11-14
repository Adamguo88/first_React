import React from "react";
import Carousel from "../components/Carousel/Carousel";
import "./css/home.css";
export default function Home() {

  return (
    <div className="homePage">
      <Carousel />
      <section className="homeData">
        <div className="home-sample">
          <div className="home-start-food">
            <img
              src="https://www.ubereats.com/_static/d68c5f5ddd33d16a8d6855987410673b.svg"
              alt=""
            />
            <p>以美食慰勞員工辛勞</p>
            <p>建立企業帳戶</p>
          </div>
          <div className="home-start-food">
            <img
              src="https://www.ubereats.com/_static/d68c5f5ddd33d16a8d6855987410673b.svg"
              alt=""
            />
            <p>以美食慰勞員工辛勞</p>
            <p>建立企業帳戶</p>
          </div>
          <div className="home-start-food">
            <img
              src="https://www.ubereats.com/_static/d68c5f5ddd33d16a8d6855987410673b.svg"
              alt=""
            />
            <p>以美食慰勞員工辛勞</p>
            <p>建立企業帳戶</p>
          </div>
        </div>
      </section>
    </div>
  );
}
