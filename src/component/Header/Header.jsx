import "./Header.css";
import {  FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";






const Header = () => {

     const  navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchTerm("");

  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Show dropdown on hover
  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName); // Open only the hovered dropdown
  };

  // Hide dropdown when leaving it (5s delay)
  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 5000);
  };

 
  

  return (
    <div className="Headerwrapper">
      
      <div className="Header">
        <div className="Logoimg">
          <img src="public/loder.png.webp" alt="logo" />
          
          <p>CapitalShop</p>
        </div>

        <div className="Categories">
          <ul className="ul-header">
            <li className="li-header" onClick={() => navigate("/")}>Home</li>
            <li className="li-header">Men</li>
            <li className="li-header">Women</li>
            <li className="li-header">Baby Collections</li>

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

                  <NavLink to={"/ProductCheckout"}>

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

          <NavLink to={"/Login"}>
          <i className="i-nav"><CgProfile /></i>

         </NavLink>
          <i className="i-nav">
            <HiOutlineShoppingCart />
            <p className="cartcount">1</p>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;