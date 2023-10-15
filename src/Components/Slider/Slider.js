import React from "react";
import "./Slider.scss";
import CarouselCard from "./Carousel";

const Slider = () => {
  return (
    <section id="slider">
      <div className="container">
        <div className="box-wrapper">
          <div className="slider-box">
            <CarouselCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
