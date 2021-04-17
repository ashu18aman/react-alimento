import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./Images/restaurant-view.jpg";
import img2 from "./Images/snacks.jpg";
import img3 from "./Images/thali.jpg";

const MyCarousel = () => {
  return (
    <div>
      <Carousel interval={3000} fade="true">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            height="650px"
            width="350px"
          />
          <Carousel.Caption>
            <h3>Clean and Hygienic</h3>
            <p>Safety First</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            height="650px"
            width="350px"
          />

          <Carousel.Caption>
            <h3>Snacks</h3>
            <p>Buy 2 get 1 free</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            height="650px"
            width="350px"
          />

          <Carousel.Caption>
            <h3>Thali</h3>
            <p>Both Veg and Non-Veg with good discounts</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
