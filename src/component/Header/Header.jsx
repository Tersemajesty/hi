import style from "./Header.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import { GiTwirlyFlower } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [userAuthDrop, setUserAuthDrop] = useState(false);

  return (
    <div className={style.Head}>
      <div className={style.Head1}>
        <div className={style.wrap}>
          <GiTwirlyFlower size={20} color="red" />
          <header>
            Terses <strong>store</strong>
          </header>
        </div>
        <div className={style.wrapper}>
          <Link to="/Home">
            <h1>Home</h1>
          </Link>

          <Link to="/Men">
            <h1>Men</h1>
          </Link>

          <Link to="/Women">
            <h1>Women</h1>
          </Link>

          <Link to="/BabyCollection">
            <h1>BabyCollection</h1>
          </Link>

          <Link to="/Categories">
            <h1>Categories</h1>
          </Link>

          <div
            className={style.UserAuth}
            onMouseEnter={() => setUserAuthDrop(true)}
            onMouseLeave={() => setUserAuthDrop(false)}
          >
            <div className={style.UserAuthTrigger}>
              <h1>Pages</h1>
              <RiArrowDropDownLine />
            </div>

            {userAuthDrop && (
              <div className={style.AuthDrop}>
                <ul>
                <Link to="/ProductCheckout">
                <li >ProductCheckout</li>
                </Link>
                  <Link to="/ProductDetails">
                  <li>ProductDetails</li>
                  </Link>

                  <Link to="/Cart">
                  <li>Cart</li>
                  </Link>
                 

                
                         
                  
                  


                </ul>
              </div>
            )}
          </div>

          <Link to="/Blog">
            <h1>Blog</h1>
          </Link>

          <Link to="/Contact">
            <h1>Contact</h1>
          </Link>
        </div>

        <div className={style.wrap1}>
          <Link to="/login">
            <AiOutlineUser size={20} />
          </Link>

          <Link to="/Search">
            <IoSearchOutline size={20} />
          </Link>

          <Link to="/Cart">
            <GrCart size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
