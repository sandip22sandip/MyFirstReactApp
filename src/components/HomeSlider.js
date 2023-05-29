import React from "react";

import slide1 from "../assets/images/slide/slide-1.jpg";
import slide2 from "../assets/images/slide/slide-2.jpg";

function HomeSlider() {
  return (
    <div
      className="clearfix carousel fade-carousel slide"
      data-ride="carousel"
      data-interval={4000}
      id="home-slide"
    >
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#home-slide" data-slide-to={0} className="active" />
        <li data-target="#home-slide" data-slide-to={1} />
      </ol>
      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="item slides active">
          <img src={slide1} alt="slide-1.jpg" style={{ width: "100%" }} />
          <div className="bannerOverlay" />
          <div className="hero">
            <hgroup className="m-b-15">
              <h3 className="text-white m-b-15">Welcome to</h3>
              <h1 className="text-white">Oceana LMS</h1>
              <h5 className="text-white">Learning made simple</h5>
            </hgroup>
            <button className="btn btn-secondary">Quick Guide</button>
          </div>
        </div>
        <div className="item slides">
          <img src={slide2} alt="slide-2.jpg" style={{ width: "100%" }} />
          <div className="bannerOverlay" />
          <div className="hero">
            <hgroup className="m-b-15">
              <h3 className="text-white m-b-15">on the surface</h3>
              <h1 className="text-white">a fishing company</h1>
              <h5 className="text-white">Deepdown, so much more</h5>
            </hgroup>
            <button className="btn btn-secondary">Quick Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
