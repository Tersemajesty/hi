import React from "react";
import "./card.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
// import

const Card = ({ images, title = "Product Name", autoplayDelay=300 }) => {
  const navigate = useNavigate();

  return (
    <div className="cardwrapper">
      <ToastContainer />

      <div className="card">
        <Swiper
          modules={[Pagination,Autoplay]}
          Pagination={{ cliiclable: true }}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="card-container"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
