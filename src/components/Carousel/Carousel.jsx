import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import url from '../../data/carousel'
import "./carousel.css";

export default function Carousel() {
  const [carousel, setCarousel] = useState([]);
  const [carouselNum, setCarouselNum] = useState(0);
  // 拿到輪播圖數據
  useEffect(() => {
    // const fetchCarousel = async () => {
    //   const url = "http://localhost:5000/carousel";
    //   try {
    //     const response = await fetch(url);
    //     const carouselData = await response.json();
    //     setCarousel(carouselData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchCarousel();
    setCarousel(url)
    
  }, []);

  // 點擊上一張、下一張切換
  useEffect(() => {
    const carouselLength = carousel.length - 1;
    if (carouselNum > carouselLength) {
      setCarouselNum(0);
    }
    if (carouselNum < 0) {
      setCarouselNum(carouselLength);
    }
  }, [carouselNum, carousel]);
  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselNum(carouselNum + 1);
    }, 6000);
    return () => {
      clearInterval(timer);
    };
  }, [carouselNum]);
  return (
    <div className="My-Food-carousel">
      {carousel.map((item, carouselIndex) => {
        const { id, images, introduction } = item;
        let position = "nextSlider";
        if (carouselIndex === carouselNum) {
          position = "activeSlider";
        }
        if (
          carouselIndex === carouselNum - 1 ||
          (carouselIndex === carousel.length - 1 && carouselNum === 0)
        ) {
          position = "lastSlider";
        }
        return (
          <section className={`carousel-animate ${position}`} key={id}>
            <img className="carousel-image" src={images} alt={introduction} />
          </section>
        );
      })}
      <button
        className="btn btn-carousel-prev"
        onClick={() => setCarouselNum(carouselNum - 1)}
      >
        <FaChevronLeft />
      </button>
      <button
        className="btn btn-carousel-next"
        onClick={() => setCarouselNum(carouselNum + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
