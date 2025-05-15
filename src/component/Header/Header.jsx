import "./Header.css";
import {  FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {

  const [menubar, setMenubar] = useState(false);
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);

  const toggleMenu = () => setMenubar(!menubar);
  const togglePageDropdown = () => setShowPageDropdown(!showPageDropdown);
  const toggleBlogDropdown = () => setShowBlogDropdown(!showBlogDropdown);

  const  navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchTerm("");

  };

  const [activeDropdown, setActiveDropdown] = useState(null);


  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName); 
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 5000);
  };
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  

  return (
    <div className="Headerwrapper">
      
      <div className="Header">
        <div className="Logoimg">
          <img src="/images/loder.png.webp" alt="logo" onClick={()=> navigate("./")} className="CapitalLogo" />
          <header onClick={()=> navigate("./")}>Fashion <strong>Hub</strong></header>
        </div>

        <div className="Categories">
          <ul className="ul-header">
            <li className="li-header" onClick={() => navigate("./")}>Home</li>
            <li className="li-header" onClick={()=> navigate("./men")}>Men</li>
            <li className="li-header" onClick={()=>navigate("./women")}>Women</li>
            <li className="li-header" onClick={()=>navigate("./babycollection")}>Baby Collections</li>

            {/* Pages Dropdown */}
            <li 
              className="li-header"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              Pages <MdOutlineKeyboardArrowDown size={20} />
              {activeDropdown === "pages" && (
                <ul 
                  className="showdropdown1"
                  onMouseEnter={() => setActiveDropdown("pages")}
                  onMouseLeave={handleMouseLeave}
                >
                 <NavLink to={"login"}>
                  <li>Login</li>
                  </NavLink>
                  <NavLink to={"/cart"}>
                  <li>Cart</li>

                  </NavLink>
                  <NavLink to={"/productdetails"}>
                  <li>Product Details</li></NavLink>

                  <NavLink to={"productcheckout"}>

                  <li>ProductCheckout</li>
                  </NavLink>
                </ul>
              )}
            </li>

            {/* Blog Dropdown */}
            <li 
              className="li-header"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={handleMouseLeave}
            >
              Blog 
              {activeDropdown === "blog" && (
                <ul 
                  className="showdropdown2"
                  onMouseEnter={() => setActiveDropdown("blog")}
                  onMouseLeave={handleMouseLeave}
                >
                  <li>Blog</li>
                  <li>Blog Element</li>
                  <li>Blog Details</li>
                </ul>
              )}
            </li>

            <li className="li-header">Contact</li>
          </ul>
        </div>

        <div className="header-icons2">
          <i className="i-nav"><IoSearchOutline className="search-icon" onClick={toggleSearch} /> 
          {showSearch && (
          <div className="search-dropdown">
            <input
              type="text"
              placeholder="Search Here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <FaTimes className="close-icon" onClick={toggleSearch} />
          </div>
        )}
          </i>
          <i className="i-nav">
            <CgProfile onClick={()=>navigate("/profilepage")} />
            </i>

          <NavLink to={"Cart"}>
          <i className="i-nav">
          < HiOutlineShoppingCart />
          <p className="cartcount">1</p>
          </i>
          </NavLink>
        </div>
      </div>

      <div  className={`headermobilev ${isFixed ? "fixed" : ""}`}>
      <div className="mobileicon">
        <img src="src/assets/logo.webp" alt="Logo" className="mibleimg" />
      </div>
      <div className="menuhld">
        <div className="menu">
          <span onClick={toggleMenu}></span>
          <RxHamburgerMenu onClick={toggleMenu} />
        </div>
      </div>
      {menubar && (
        <div className="categorymenu">
          <div className="menudownheder">
            <div className="menudown" onClick={() => navigate("/")}>Home</div>
            <div className="menudown">Men</div>
            <div className="menudown">Women</div>
            <div className="menudown">Baby Collection</div>
            <div className="menudown" onClick={togglePageDropdown}>
              Page <IoIosArrowDown />
              {showPageDropdown && (
                <ul className="dropdown-list">
                  <li onClick={() => navigate("/login")}>Login</li>
                  <li onClick={() => navigate("/cart")}>Cart</li>
                  <li onClick={() => navigate("/productdetails")}>Product Details</li>
                  <li onClick={() => navigate("/productpage")}>Product Checkout</li>
                </ul>
              )}
            </div>
            <div className="menudown" onClick={toggleBlogDropdown}>
              Blog <IoIosArrowDown />
              {showBlogDropdown && (
                <ul className="dropdown-list">
                  <li>Blog</li>
                  <li>Element</li>
                  <li>Blog Details</li>
                </ul>
              )}
            </div>
            <div className="menudown">Contact</div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Header;
