import "./Home.css";
import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { PiTruckLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { GiBank } from "react-icons/gi";
import { TbClock24 } from "react-icons/tb";
import { getAllProduct } from "../auth/Api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card/card";

const testimonials = [
  // {
  //   text: "This product has completely changed my life. The quality is amazing, and the customer support is outstanding!",
  //   image: "/images/dp.jpeg",
  //   name: "John Doe",
  //   stack: "Software Engineer",
  // },
  {
    text: "I love how easy it is to use this platform. It has saved me so much time and effort. Highly recommended!",
    image: "/images/dp.jpeg",
    name: "Emily Smith",
    stack: "Product Designer",
  },
  {
    text: "The best investment I have ever made. Their service is top-notch, and I couldn't be happier with the results!",
    image: "/images/dp.jpeg",
    name: "Michael Brown",
    stack: "Business Owner",
  },
  {
    text: "Amazing customer experience and fast delivery. I’ll definitely shop again!",
    image: "/images/dp.jpeg",
    name: "Sarah Lee",
    stack: "E-commerce Manager",
  },
  {
    text: "Very user-friendly and reliable. The attention to detail is impressive.",
    image: "/images/dp.jpeg",
    name: "Daniel Ek",
    stack: "UX Researcher",
  },
];

const images1 = [
  { url: "/images/img12.jpeg", title: "New Yellow Blouse", price: "$60.00" },
  { url: "/images/mesh2.jpeg", title: "Mesh New Design", price: "$20.00" },
  { url: "/images/img11.jpeg", title: "Jean Inner Singlet", price: "$50.00" },
  { url: "/images/mesh4.jpeg", title: "New Mesh Gown", price: "$15.00" },
];

const images2 = [
  {
    url: "/images/vint3.jpeg",
    title: "Green Mix Vintage Shirt",
    price: "$30.00",
  },
  { url: "/images/senate5.jpeg", title: "Senator Wear", price: "$35.00" },
  { url: "/images/shirt1.jpeg", title: "New Black Shirt", price: "$10.00" },
  { url: "/images/vint1.jpeg", title: "Vintage Shirt", price: "$15.00" },
];

const Home = () => {
  const [menubar, setMenubar] = useState(false);
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);

  const toggleMenu = () => setMenubar(!menubar);
  const togglePageDropdown = () => setShowPageDropdown(!showPageDropdown);

  const [currentCarouselIndex2, setCurrentCarouselIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCarouselSlide2();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentCarouselIndex2]);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const incrementTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const decrementTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const images = [
    {
      url: "/images/navbar.jpg",
      align: "left",
      h1: "Minimal Men's Style",
    },
    {
      url: "/images/navbar2.jpg",
      align: "right",
      h1: "Minimal Woman Wears",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".slide-up").style.opacity = "1";
    }, 100);

    getAllProduct();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    toast.success("Added to cart");
    position: "top-right";
    autoClose: 2000;
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);
  const trendingPages = Math.ceil(images1.length / 4);

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

  return (
    <div className="HomeWrapper">
      <ToastContainer />

      <nav className="navbar">
        <h5>
          Period Offer <span className="spam">Shop Now</span>{" "}
        </h5>
        <p>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer{" "}
          <span className="spam">Shop Now</span>
        </p>
      </nav>

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
        <div className={`text-container ${images[currentIndex].align}`}>
          <h2 className="fade-in h2">Fashion Sale</h2>
          <h1 className="slide-up h1" color="red">
            {images[currentIndex].h1}
          </h1>
          {images[currentIndex].align === "left" ? (
            <p className="zoom-in p">
              "Own Every Moment. Style That Speaks Strength." From bold senator{" "}
              <br /> sets to laid-back casuals, our men's collection blends
              modern design <br /> with cultural flair. Dress to
              express—comfort, class, and confidence <br /> in every stitch.
            </p>
          ) : (
            <p className="zoom-in p">
              "Unapologetically You. Effortless Elegance, Everyday." Turn heads
              with our stunning range of women’s wear—casual, formal, and
              everything in between. For every mood, every move, and every woman
              who wears her power with style.
            </p>
          )}
          <button className="btn-slide">Shop Now</button>
        </div>

        <button className="nav-button left-btn" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-button right-btn" onClick={nextSlide}>
          ❯
        </button>
      </section>

      <div className="product-categories">
        <div className="categories-wrapper">
          {/* Men's Fashion */}
          <div className="category-box men">
            <div className="text-container1">
              <h1>Men’s Fashion</h1>
              <p onClick={() => navigate("./Men")} className="shop-now">
                Shop Now
              </p>
            </div>
          </div>

          {/* Women's Fashion */}
          <div className="category-box women">
            <div className="text-container1">
              <h1>Women’s Fashion</h1>
              <p onClick={() => navigate("./Women")} className="shop-now">
                Shop Now
              </p>
            </div>
          </div>

          {/* Baby's Fashion */}
          <div className="category-box baby">
            <div className="text-container1">
              <h1>Baby’s Fashion</h1>
              <p
                onClick={() => navigate("./BabyCollection")}
                className="shop-now"
              >
                Shop Now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel9-section">
        {/* Header Section */}
        <div className="carousel9-header">
          <h2>Trendings This Week</h2>
          <div className="category9-links">
            <a onClick={() => navigate("./men")} href="#">
              Men
            </a>
            <a onClick={() => navigate("./women")} href="#">
              Women
            </a>
            <a onClick={() => navigate("./babycollection")} href="#">
              Baby
            </a>
            
          </div>
        </div>

        <div className="separator9-line"></div>
<div className="carousel9">
  {images2?.map((image, index) => (
    <div key={index} className="slide9">
      <div className="image9-container">
        <img src={image.url} alt={`Slide ${index + 1}`} />
        <div className="hover9-box">
          <div className="icon9-container">
            <FaShoppingCart
              onClick={() => handleAddToCart(image)}
              className="icon9"
            />
          </div>
          <div className="icon9-container">
            <FaSearch className="icon9" />
          </div>
        </div>
      </div>
      <div className="product9-details">
        <h2 className="product9-title">{image.title}</h2>
        <p className="price9">
          <span className="old9-price">{image.price}</span>
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
      <div className="testimony-container">
        <h2 className="testimony-header">Clients review</h2>
        <p className="testimony-subtext">What our customers are saying</p>

        <div className="testimony-wrapper">
          <button
            className="nav-button left-btn"
            onClick={decrementTestimonial}
          >
            <FaChevronLeft />
          </button>

          <div className="testimony-content">
            <p className="testimony-text slide">
              {testimonials[currentTestimonialIndex].text}
            </p>
            <div className="testimony-profile slide">
              <img
                src={testimonials[currentTestimonialIndex].image}
                alt={testimonials[currentTestimonialIndex].name}
                className="profile-image"
              />
              <div>
                <h3 className="profile-name">
                  {testimonials[currentTestimonialIndex].name}
                </h3>
                <p className="profile-stack">
                  {testimonials[currentTestimonialIndex].stack}
                </p>

                <button
                  className="nav-button right-btn"
                  onClick={incrementTestimonial}
                >
                  {/* <FaChevronRight /> */}
                </button>
              </div>
            </div>
          </div>

          <button
            className="nav-button right-btn"
            onClick={incrementTestimonial}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="carousel9-section">
        {/* Header Section */}
        <div className="carousel9-header">
          <h2>You May Also Like</h2>
          <div className="category9-links">
            <a onClick={() => navigate("./men")} href="#">
              Men
            </a>
            <a onClick={() => navigate("./women")} href="#">
              Women
            </a>
            <a onClick={() => navigate("./babycollection")} href="#">
              Baby
            </a>
            
          </div>
        </div>
        {/* Gray Separator Line */}
        <div className="separator9-line"></div>
        {/* Carousel */}
        <div className="carousel9-container">
          <button
            className="nav9-button left9-btn"
            onClick={trendingPrevSlide}
          ></button>
          <div className="carousel9">
            {images1
              .slice(currentTrendingIndex * 4, currentTrendingIndex * 4 + 4)
              .map((image, index) => (
                <div key={index} className="slide9">
                  {/* Product Image */}
                  <div className="image9-container">
                    <img src={image.url} alt={`Slide ${index + 1}`} />
                    {/* Hover Box */}
                    <div className="hover9-box">
                      <div className="icon9-container">
                        <FaShoppingCart className="icon9" />
                      </div>

                      <div className="icon9-container">
                        <FaSearch className="icon9" />
                      </div>
                    </div>
                  </div>
                  {/* Product Name & Price */}
                  <div className="product9-details">
                    <h2 className="product9-title">{image.title}</h2>
                    <p className="price9">
                      <span className="old9-price">{image.price}</span>{" "}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="nav9-button right9-btn"
            onClick={trendingNextSlide}
          ></button>
        </div>
      </div>

      <div className="Mainbody">
        <div className="Wrap1er">
          <div className="downicon">
            <div className="iconhld1">
              <PiTruckLight size={65} />
            </div>
            <h3>Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="downicon woman">
            <div className="iconhld1">
              <CiCreditCard1 size={65} />
            </div>
            <h3>Secure Payment</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="downicon man">
            <div className="iconhld1">
              <GiBank size={65} />
            </div>
            <h3>Money Back Guarantee</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="downicon">
            <div className="iconhld1">
              <TbClock24 size={65} />
            </div>
            <h3>Online Support</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
