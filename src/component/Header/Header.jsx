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
import { preconnect } from "react-dom";

const Header = () => {
  // const [menubar, setMenubar] = useState(false);
  // const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenDropdown, setMobileMenuDropdown] = useState(false);
  const [mobileWomenDropdown, setMobileWomenDropdown] = useState(false);
  const [mobileBabyDropdown, setMobileBabyDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDropdown1 = () => {
    setDropdown1(!dropdown1);
  };

  const handleDropdown2 = () => {
    setDropdown2(!dropdown2);
  };

  const handleDropdown3 = () => {
    setDropdown3(!dropdown3);
  };

  useEffect(() => {
    const fetchCartCount = async () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      if (!token) return;
      try {
        const response = await fetch(
          "https://capitalshop-3its.onrender.com/api/cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        console.log("Cart items", data?.cart?.items);
        const items = data?.items || [];
        const totalQuantity = items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        setCartCount(totalQuantity);
      } catch (error) {
        console.error("Error fetching cart count:", error);
        setCartCount(0);
      }
    };
    fetchCartCount();
  }, []);
  // const toggleMenu = () => setMenubar(!menubar);
  // const togglePageDropdown = () => setShowPageDropdown(!showPageDropdown);

  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowSearch(false);
    }
  };

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
            <p onClick={() => navigate("./")}>Home</p>

            <p onClick={handleDropdown1}>Men</p>
            {dropdown1 ? (
              <div className="Dropdown1">
                <p className="ptag" onClick={() => navigate("/senator")}>
                  senator
                </p>
                <p className="ptag" onClick={() => navigate("/casual")}>
                  casual
                </p>
                <p className="ptag" onClick={() => navigate("/formal")}>
                  formal outfits
                </p>
                <p className="ptag" onClick={() => navigate("/summer")}>
                  summer
                </p>
              </div>
            ) : null}

            <p onClick={handleDropdown2}>Woman</p>
            {dropdown2 ? (
              <div className="Dropdown2">
                <p className="ptag" onClick={() => navigate("/mesh")}>
                  mesh gown
                </p>
                <p className="ptag" onClick={() => navigate("/dinner")}>
                  Dinner gown
                </p>
                <p className="ptag" onClick={() => navigate("/bubu")}>
                  Bubu
                </p>
              </div>
            ) : null}

            <p onClick={handleDropdown3}>Baby Collection</p>
            {dropdown3 ? (
              <div className="Dropdown3">
                <p className="ptag" onClick={() => navigate("/ball")}>
                  Ball gowns
                </p>
                <p className="ptag" onClick={() => navigate("/summer")}>
                  Summer{" "}
                </p>
              </div>
            ) : null}

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

            {/* Blog Dropdown */}
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
          {isLoggedIn ? (
            <i className="i-nav">
              <CgProfile onClick={() => navigate("/profilepage")} />
            </i>
          ) : (
            <i className="i-nav">
              <CgProfile onClick={() => navigate("/login")} />
            </i>
          )}

          <NavLink to={"Cart"}>
            <i className="i-nav">
              <HiOutlineShoppingCart />
              {cartCount > 0 && <p className="cartcount">{cartCount}</p>}{" "}
            </i>
          </NavLink>
        </div>
      </div>

    <div className="headermobilev">
  <div className="mobileicon">
    <img src="/images/loder.png.webp" onClick={()=> navigate("./")} alt="Logo" className="mibleimg" />
    <div className="mobileheadericons">
      <CgProfile size={32} onClick={() => navigate("./login")} />
      <HiOutlineShoppingCart onClick={() => navigate("./cart")} size={32} />
      <RxHamburgerMenu size={35} onClick={toggleMenu} />
    </div>
  </div>

  {/* Mobile Side Menu */}
  <nav className={`side-menu ${isOpen ? "open" : ""}`}>
    <FaTimes className="close-icon" onClick={closeMenu} />
    <ul>
      <li><p onClick={() => { closeMenu(); navigate("/") }}>Home</p></li>
      <li><p onClick={() => setMobileMenuDropdown(!mobileMenDropdown)}>
        Men {mobileMenDropdown ? "" : ""}</p></li>
      {mobileMenDropdown && (
        <ul className="mobile-dropdown">
          <li onClick={() => { closeMenu(); navigate("/senator") }}>Senator</li>
          <li onClick={() => { closeMenu(); navigate("/casual") }}>Casual</li>
          <li onClick={() => { closeMenu(); navigate("/formal") }}>Formal Outfits</li>
          <li onClick={() => { closeMenu(); navigate("/summer") }}>Summer</li>
        </ul>
      )}

        <li><p onClick={() => setMobileWomenDropdown(!mobileWomenDropdown)}>
        Women {mobileWomenDropdown ? "" : ""}</p></li>
      {mobileWomenDropdown && (
        <ul className="mobile-dropdown">
          <li onClick={() => { closeMenu(); navigate("/mesh ") }}>Mesh gown</li>
          <li onClick={() => { closeMenu(); navigate("/dinner") }}>Dinner</li>
          <li onClick={() => { closeMenu(); navigate("/bubu") }}>Bubu gown</li>
        </ul>
      )}

      <li><p onClick={() => setMobileBabyDropdown(!mobileBabyDropdown)}>
        BabyCollection {mobileBabyDropdown ? "" : ""}</p></li>
      {mobileBabyDropdown && (
        <ul className="mobile-dropdown">
          <li onClick={() => { closeMenu(); navigate("/ball ") }}>Ball Gown</li>
          <li onClick={() => { closeMenu(); navigate("/summer") }}>Summer</li>
        </ul>
      )}
    </ul>
  </nav>

  {/* Dark Overlay */}
  {isOpen && <div className="overlay" onClick={closeMenu}></div>}
</div>

    </div>
  );
};

export default Header;
