import React, { useState } from 'react';
import './card.css';
import { FaShoppingCart, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const card = ({ images = [], title = "Product Name" }) => {
  const navigate = useNavigate();
  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);

  const trendingPages = Math.ceil(images.length / 4 || 1);

  const trendingPrevSlide = () => {
    setCurrentTrendingIndex((prev) =>
      prev === 0 ? trendingPages - 1 : prev - 1
    );
  };

  const trendingNextSlide = () => {
    setCurrentTrendingIndex((prev) =>
      prev === trendingPages - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/Cart");
    }, 1500);
  };

  return (
    <div className="cardwrapper">
      <ToastContainer />
      <button className="card-button cardleft9-btn" onClick={trendingPrevSlide}>
        <FaChevronLeft />
      </button>

      <div className="card">
        <div className="card-container">
          {images.length > 0 ? (
            images
              .slice(currentTrendingIndex * 4, currentTrendingIndex * 4 + 4)
              .map((image, index) => (
                <div key={index} className="cardslide">
                  <div className="card-image-container">
                    <img src={image.url} alt={`Slide ${index + 1}`} />
                    <div className="card-hover9-box">
                      <div className="card-icon9-container">
                        <FaShoppingCart
                          className="card-icon9"
                          onClick={handleAddToCart}
                        />
                      </div>
                      <div className="icon9-container">
                        <FaHeart className="icon9" />
                      </div>
                    </div>
                  </div>
                  <div className="card-product9-details">
                    <h2 className="card-product9-title">{title}</h2>
                    <p className="card-price9">
                      $98.00 <span className="card-old9-price">$120.00</span>
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>

      <button className="card-button cardright9-btn" onClick={trendingNextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default card;
