import "./Header.css";
import { FaTimes } from "react-icons/fa";
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
  const [showIconDropdown, setShowIconDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenubar(!menubar);
  const togglePageDropdown = () => setShowPageDropdown(!showPageDropdown);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchTerm("");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 50000);
  };

  const handleIconClick = () => {
    setShowIconDropdown((prev) => !prev);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setShowIconDropdown(false);
    }, 50000);
  };

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
          <img
            src="/images/loder.png.webp"
            alt="logo"
            onClick={() => navigate("./")}
            className="CapitalLogo"
          />
          <header onClick={() => navigate("./")}>
            Fashion <strong>Hub</strong>
          </header>
        </div>

        <div className="Categories">
          <ul className="ul-header">
            <li className="li-header" onClick={() => navigate("./")}>
              Home
            </li>

            <li
              className="li-header"
              onMouseEnter={() => handleMouseEnter("men")}
              onMouseLeave={handleMouseLeave}
            >
              Men{" "}
              {activeDropdown === "men" && (
                <ul
                  className="showdropdown2"
                  onMouseEnter={() => setActiveDropdown("men")}
                  onMouseLeave={handleMouseLeave}
                >
                  <li onClick={() => navigate("/senator")}>Senator</li>
                  <li onClick={() => navigate("/casual")}>Casual</li>
                  <li onClick={() => navigate("/formal")}>Formal Outfits</li>
                  <li onClick={() => navigate("/summer")}>Summer</li>
                </ul>
              )}
            </li>

            <li
              className="li-header"
              onMouseEnter={() => handleMouseEnter("women")}
              onMouseLeave={handleMouseLeave}
            >
              Women
              {activeDropdown === "women" && (
                <ul
                  className="showdropdown3"
                  onMouseEnter={() => setActiveDropdown("women")}
                  onMouseLeave={handleMouseLeave}
                >
                  <li onClick={() => navigate("/mesh")}>Mesh Gown</li>
                  <li onClick={() => navigate("/bubu")}>Bubu Gown</li>
                  <li onClick={() => navigate("/dinner")}>Dinner Gowns</li>
                </ul>
              )}
            </li>

            <li
              className="li-header"
              onMouseEnter={() => handleMouseEnter("babycollection")}
              onMouseLeave={handleMouseLeave}
            >
              Baby Collection
              {activeDropdown === "babycollection" && (
                <ul
                  className="showdropdown4"
                  onMouseEnter={() => setActiveDropdown("babycollection")}
                  onMouseLeave={handleMouseLeave}
                >
                  <li onClick={() => navigate("/ball")}>Ball Gown</li>
                  <li onClick={() => navigate("/summerBabies")}>
                    Summer Wears
                  </li>
                </ul>
              )}
            </li>

            <li
              className="li-header"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              Pages
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
                    <li>Product Details</li>
                  </NavLink>
                  <NavLink to={"productcheckout"}>
                    <li>ProductCheckout</li>
                  </NavLink>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="header-icons2">
          <i className="i-nav">
            <IoSearchOutline className="search-icon" onClick={toggleSearch} />
            {showSearch && (
              <div className="search-dropdown">
                <input
                  type="text"
                  placeholder="Search Here......."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                  className="search-input"
                />
                <FaTimes className="close-icon" onClick={toggleSearch} />
              </div>
            )}
          </i>

          <i className="i-nav">
            <CgProfile onClick={() => navigate("/profilepage")} />
          </i>

          <NavLink to={"Cart"}>
            <i className="i-nav">
              <HiOutlineShoppingCart />
              <p className="cartcount">1</p>
            </i>
          </NavLink>

          {/* 👇 Icon-triggered dropdown */}
          <div className="icon-dropdown-wrapper">
            <MdOutlineKeyboardArrowDown
              className="dropdown-icon"
              onClick={handleIconClick}
            />
            {showIconDropdown && (
              <ul
                className="custom-dropdown"
                onMouseLeave={handleDropdownMouseLeave}
                onMouseEnter={() => setShowIconDropdown(true)}
              >
                <li onClick={() => navigate("/option1")}>Option 1</li>
                <li onClick={() => navigate("/option2")}>Option 2</li>
                <li onClick={() => navigate("/option3")}>Option 3</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={`headermobilev ${isFixed ? "fixed" : ""}`}>
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
              <div className="menudown" onClick={() => navigate("/")}>
                Home
              </div>
              <div className="menudown" onClick={() => navigate("./men")}>
                Men
              </div>
              <div className="menudown" onClick={() => navigate("./women")}>
                Women
              </div>
              <div
                className="menudown"
                onClick={() => navigate("./babycollection")}
              >
                Baby Collection
              </div>
              <div className="menudown" onClick={togglePageDropdown}>
                Page <IoIosArrowDown />
                {showPageDropdown && (
                  <ul className="dropdown-list">
                    <li onClick={() => navigate("/login")}>Login</li>
                    <li onClick={() => navigate("/cart")}>Cart</li>
                    <li onClick={() => navigate("/productdetails")}>
                      Product Details
                    </li>
                    <li onClick={() => navigate("/productpage")}>
                      Product Checkout
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
