import "./Home.css"
import  { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiTruckLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { GiBank } from "react-icons/gi";
import { TbClock24 } from "react-icons/tb";






const testimonials = [
  {
    text: "This product has completely changed my life. The quality is amazing, and the customer support is outstanding!",
    image: "src/assets/ceo.webp",
    name: "John Doe",
    stack: "Software Engineer",
  },
  {
    text: "I love how easy it is to use this platform. It has saved me so much time and effort. Highly recommended!",
    image: "src/assets/ceo.webp",
    name: "Emily Smith",
    stack: "Product Designer",
  },
  {
    text: "The best investment I have ever made. Their service is top-notch, and I couldn't be happier with the results!",
    image: "src/assets/ceo.webp",
    name: "Michael Brown",
    stack: "Business Owner",
  },
];



const images9 = [
  { url: "src/assets/Carousel1.webp" },
  { url: "src/assets/Carousel2.webp" },
  { url: "src/assets/Carousel3.webp" },
  { url: "src/assets/Carousel4.webp" },
  { url: "src/assets/Carousel4.webp" },
  { url: "src/assets/Carousel5.webp" },
  { url: "src/assets/Carousel2.webp" },
  { url: "src/assets/Carousel4.webp" },
  { url: "src/assets/Carousel5.webp" },
  { url: "src/assets/Carousel1.webp" },
  { url: "src/assets/Carousel1.webp" },
  { url: "src/assets/Carousel1.webp" },
];

const youLikeImages = [
  { url: "src/assets/youlike1.webp" },
  { url: "src/assets/youlike1.webp" },
  { url: "src/assets/youlike2.webp" },
  { url: "src/assets/youlike3.webp" },
  { url: "src/assets/youlike3.webp" },
  { url: "src/assets/youlike4.webp" },
  { url: "src/assets/youlike5.webp" },
  { url: "src/assets/youlike5.webp" },
  { url: "src/assets/youlike6.webp" },
  { url: "src/assets/youlike9.webp" },
  { url: "src/assets/youlike8.webp" },
  { url: "src/assets/youlike7.webp" },
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

  const prevCarouselSlide2 = () => {
    setCurrentCarouselIndex2((prevIndex) =>
      prevIndex === 0 ? Math.ceil(youLikeImages.length / 4) - 1 : prevIndex - 1
    );
  };

  const nextCarouselSlide2 = () => {
    setCurrentCarouselIndex2((prevIndex) =>
      prevIndex === Math.ceil(youLikeImages.length / 4) - 1 ? 0 : prevIndex + 1
    );
  };

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

// State for trending carousel
const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);
const trendingPages = Math.ceil(images9.length / 4);

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

const images = [
  {
    url: "src/assets/navbar.jpg",
    align: "left",
  },
  {
    url: "src/assets/navbar2.jpg",
    align: "right",
  },
];


useEffect(() => {
    setTimeout(() => {
      document.querySelector(".slide-up").style.opacity = "1";
    }, 100);
  }, []);
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

   

  return (
    <div className="HomeWrapper">
           <div className="first">
      <nav className="navbar">
        <h5>Period Offer <span className="spam">Shop Now</span> </h5>
        <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span className="spam">Shop Now</span></p>
      </nav>

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }} >
        <div className={`text-container ${images[currentIndex].align}`}>
       
          <h2 className="fade-in h2">Fashion Sale</h2>
          <h1 className="slide-up h1" color="red">Minimal Menz Style</h1>
          <p className="zoom-in p">
            Consectetur adipisicing  elit. Laborum fuga incidunt <br />
             laboriosam voluptas iure, delectus <br />dignissimos facilis
               neque nulla earum.
          </p>
          <button className="btn-slide">Shop Now</button>
        </div>

        <button className="nav-button left-btn" onClick={prevSlide}>❮</button>
        <button className="nav-button right-btn" onClick={nextSlide}>❯</button>
      </section>
    </div>
    <div className="product-categories">
      <div className="categories-wrapper">
        {/* Men's Fashion */}
        <div className="category-box men">
          <div className="text-container1">
            <h1>Men’s Fashion</h1>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>

        {/* Women's Fashion */}
        <div className="category-box women">
          <div className="text-container1">
            <h1>Women’s Fashion</h1>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>

        {/* Baby's Fashion */}
        <div className="category-box baby">
          <div className="text-container1">
            <h1>Baby’s Fashion</h1>
            <p className="shop-now">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel9-section">
  {/* Header Section */}
  <div className="carousel9-header">
    <h2>Trending This Week</h2>
    <div className="category9-links">
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Baby</a>
      <a href="#">Favorites</a>
    </div>
  </div>
  
  {/* Gray Separator Line */}
  <div className="separator9-line"></div>

  {/* Carousel */}
  <div className="carousel9-container">
    <button className="nav9-button left9-btn" onClick={trendingPrevSlide}>❮</button>
    <div className="carousel9">
      {images9
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
                  <FaHeart className="icon9" />
                </div>
                <div className="icon9-container">
                  <FaSearch className="icon9" />
                </div>
              </div>
            </div>
            {/* Product Name & Price */}
            <div className="product9-details">
              <h2 className="product9-title">Cashmere Tank + Bag</h2>
              <p className="price9">
                $98.00 <span className="old9-price">$120.00</span>
              </p>
            </div>
          </div>
        ))}
    </div>
    <button className="nav9-button right9-btn" onClick={trendingNextSlide}>❯</button>
  </div>
</div>
<div className="testimony-container">
    <h2 className="testimony-header">Customer Testimonial</h2>
    <p className="testimony-subtext">What our customers are saying</p>

    <div className="testimony-wrapper">
      <button className="nav-button left-btn" onClick={decrementTestimonial}>
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
          </div>
        </div>
      </div>

      <button className="nav-button right-btn" onClick={incrementTestimonial}>
        <FaChevronRight />
      </button>
    </div>
  </div>
  <div className="carousel9-section">
      {/* Header Section */}
      <div className="carousel9-header">
        <h2>You May Also Like</h2>
        <div className="category9-links">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Baby</a>
          <a href="#">Favorites</a>
        </div>
      </div>
      
      {/* Gray Separator Line */}
      <div className="separator9-line"></div>

      {/* Carousel */}
      <div className="carousel9-container">
        <button className="nav9-button left9-btn" onClick={prevCarouselSlide2}>❮</button>
        <div className="carousel9">
          {youLikeImages
            .slice(currentCarouselIndex2 * 4, currentCarouselIndex2 * 4 + 4)
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
                      <FaHeart className="icon9" />
                    </div>
                    <div className="icon9-container">
                      <FaSearch className="icon9" />
                    </div>
                  </div>
                </div>
                {/* Product Name & Price */}
                <div className="product9-details">
                  <h2 className="product9-title">Cashmere Tank + Bag</h2>
                  <p className="price9">
                    $98.00 <span className="old9-price">$120.00</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <button className="nav9-button right9-btn" onClick={nextCarouselSlide2}>❯</button>
      </div>
    </div>
      <div className="LatestNews">
        <div className="Latestnewswrapper">
       <div className="latestnewsimgandtext">
        <div className="Latestnewsimghlder">
          <img src="src/assets/like1.webp" alt="" className="latestnewsImage" />
        </div>
        <div className="latestNewsletter">

        <p>Fashion Tips</p>
        <h3>What Curling Irons Are The Best Ones</h3>
        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
        <h5>Read More</h5>
        </div>
       </div>
       <div className="latestnewsimgandtext">
        <div className="Latestnewsimghlder2">
          <img src="src/assets/like2.webp" alt=""  className="latestnewsImage" />
        </div>
        <div className="latestNewsletter">

        <p>Fashion Tips</p>
        <h3>Vogues Ultimate Guide To Autumn/ Winter 2019 Shoes</h3>
        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
        <h5>Read More</h5>
        </div>
       </div>
       <div className="latestnewsimgandtext">
        <div className="Latestnewsimghlder">
          <img src="src/assets/like3.webp" alt="" className="latestnewsImage" />
        </div>
        <div className="latestNewsletter">
        <p>Fashion Tips</p>
        <h3>What Curling Irons Are The Best Ones</h3>
        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
        <h5>Read More</h5>
        </div>
       </div>
       </div>
      </div>
      <div className="Mainbody">
      <div className="Wrap1er">
         <div className="downicon">
            <div className="iconhld1"><PiTruckLight size={65} /></div>
            <h3>
            Fast & Free Delivery
            </h3>
            <p>

            Free delivery on all orders   
            </p>
         </div>
         <div className="downicon woman">
            <div className="iconhld1"><CiCreditCard1 size={65} /></div>
            <h3>
            Secure Payment
            </h3>
            <p>

            Free delivery on all orders
            </p>
         </div>
         <div className="downicon man">
            <div className="iconhld1"><GiBank size={65} /></div>
            <h3>
            Money Back Guarantee
            </h3>
            <p>

            Free delivery on all orders 
            </p>
         </div>
         <div className="downicon">
            <div className="iconhld1"><TbClock24 size={65}/></div>
            <h3>
            Online Support
            </h3>
            <p>

            Free delivery on all orders 
            </p>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Home
