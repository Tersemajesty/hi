import React, { useEffect, useState } from "react";
import "./card.css";
import {
  FaShoppingCart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = ({ images, title = "Product Name" }) => {
  const navigate = useNavigate();
  const [dataset, setDataset] = useState([]);

  const [initialIndex, setInitialIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(4);

  const trendingPrevSlide = () => {
    setInitialIndex((prev) => (prev <= 0 ? 0 : prev - 1));
    setFinalIndex((prev) => (initialIndex <= 0 ? 4 : prev - 1));
  };

  const trendingNextSlide = () => {
    if (finalIndex < images?.length) {
      setInitialIndex((prev) => prev + 1);
      setFinalIndex((prev) => prev + 1);
    }
  };

  console.log(initialIndex, finalIndex);

 


  return (
    <div className="cardwrapper">
      <ToastContainer />
      <button className="card-button cardleft9-btn" onClick={trendingPrevSlide}>
        <FaChevronLeft />
      </button>

      <div className="card">
        <div className="card-container">
          {images?.length > 0 ? (
            images.slice(initialIndex, finalIndex)?.map((item, index) => (
              <div key={index} className="cardslide">
                <div
                  onClick={() => navigate(`/productdetails/${item.id}`)}
                  className="card-image-container"
                >
                  <img src={item.image} alt={`Slide ${index + 1}`} />
                  <div className="card-hover9-box"></div>
                </div>
                <div className="card-product9-details">
                  <h2 className="card-product9-title">{item.name}</h2>
                  <p className="card-price9">
                    $98.00 <span className="card-old9-price">{item.price}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>

      <button
        className="card-button cardright9-btn"
        onClick={trendingNextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Card;
