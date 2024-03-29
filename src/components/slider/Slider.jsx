/* eslint-disable react/prop-types */
import { useState } from "react";
import "./slider.scss";
const Slider = ({ images }) => {
  const { inamgeIndex, setImageIndex } = useState(2);
  return (
    <div className="slider">
      {inamgeIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imageContainer">
            <img src={images[inamgeIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src="/arrow.png" alt="" className="right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={images} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
