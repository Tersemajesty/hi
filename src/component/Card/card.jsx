import React from "react";
import "./card.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Card = ({ images, title = "Product Name" }) => {
  const navigate = useNavigate();

  return (
    <div className="cardwrapper">
      <ToastContainer />

      <div className="card">
        <div className="card-container">
          {images?.map((item, index) => (
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
