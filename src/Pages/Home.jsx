import "./Home.css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  { url: "/images/img1.jpeg" },
  { url: "/images/img2.jpeg" },
  { url: "/images/img5.jpeg" },
  { url: "/images/img6.jpeg" },
  { url: "/images/men1.jpeg" },
  { url: "/images/men2.jpeg" },
  { url: "/images/men3.jpeg" },
  { url: "/images/men5.jpeg" },
  { url: "/images/img11.jpeg" },
  { url: "/images/img12.jpeg" },
  { url: "/images/men5.jpeg" },
  { url: "/images/img5.jpeg" },
];

const images2 = [
  { url: "/images/swim1.jpeg" },
  { url: "/images/swim2.jpeg" },
  { url: "/images/swim3.jpeg" },
  { url: "/images/youlike3.webp" },
  { url: "/images/swim4.jpeg" },
  { url: "/images/youlike4.webp" },
  { url: "/images/swim5.jpeg" },
  { url: "/images/swim1.jpeg" },
  { url: "/images/youlike6.webp" },
  { url: "/images/swim6.jpeg" },
  { url: "/images/youlike8.webp" },
  { url: "/images/swim2.jpeg" },
];

const Home = () => {
  const [menubar, setMenubar] = useState(false);
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);

  const toggleMenu = () => setMenubar(!menubar);
  const togglePageDropdown = () => setShowPageDropdown(!showPageDropdown);
  const toggleBlogDropdown = () => setShowBlogDropdown(!showBlogDropdown);

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

  return (
    <div className="HomeWrapper">
      <ToastContainer />
      <div className="first">
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
                "Own Every Moment. Style That Speaks Strength." From bold
                senator <br /> sets to laid-back casuals, our men's collection blends
                modern design <br /> with  cultural flair. Dress to express—comfort,
                class, and confidence <br /> in every stitch.
              </p>
            ) : (
              <p className="zoom-in p">
                "Unapologetically You. Effortless Elegance, Everyday."
Turn heads with our stunning range of women’s wear—casual, formal, and everything in between. For every mood, every move, and every woman who wears her power with style.
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
      </div>
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
            <a onClick={() => navigate("./favorites")} href="#">
              Favorites
            </a>
          </div>
        </div>

        <div className="separator9-line"></div>
        <div className="carousel9-container ">
          <Card images={images1} title="Casual Wear" />
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
            <a onClick={() => navigate("./favorites")} href="#">
              Favorites
            </a>
          </div>
        </div>

        {/* Gray Separator Line */}
        <div className="separator9-line"></div>

        {/* Carousel */}
        <Card images={images2} title="Casual Wear" />
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
