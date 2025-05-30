import { useState, useEffect, useRef } from "react";
import style from "./Pages.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import axios from "axios";
import Card from "../component/Card/card";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const hasFetched = useRef(false); // Prevent multiple fetches in development mode

  const images1 = [
    { url: "/images/img6.jpeg" },
    { url: "/images/img5.jpeg" },
    { url: "/images/img6.jpeg" },
    { url: "/images/img6.jpeg" },
  ];

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You must be logged in to view your cart.");
        return;
      }

      try {
        const res = await axios.get(
          "https://capitalshop-3its.onrender.com/api/cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const items = res?.data?.items || [];
        setCartItems(items);
        console.log("Cart response:", res.data);
      } catch (err) {
        console.error("login in first:", err.response?.data || err.message);
        toast.error("Failed to load cart items.");
      }
    };

    fetchCart();
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
const url1 = "https://capitalshop-3its.onrender.com/api/cart/remove";
  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item?.productId?.price || 0) * item.quantity,
    0
  );

  return (
    <div className={style.Cart}>
      <div className={style.Cart1}>
        <h2>Your Cart</h2>
      </div>

      <div className={style.car2}>
        <div className={style.purpose}>
          <h1>Products</h1>
        </div>

        <div className={style.containerdiv}>
          <div className={style.containerdiv2}>
            {cartItems.map((item) => (
              <div key={item._id} className={style.purpose1}>
                <h1>{item.productId?.name}</h1>
                <div className={style.chnge1}>
                  <div className={style.buttondiv}>
                    <button onClick={() => handleDecrease(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item._id)}>+</button>
                  </div>
                  <p className={style.p}>
                    ${(item.productId?.price * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => handleDelete(item._id)}>
                    <RiDeleteBin6Line size={16} style={{ color: "red" }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={style.containerdiv1}>
            <div className={style.purpose3}>
              <h1>Order Summary</h1>
              <div className={style.subtotal}>
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className={style.chnge9}>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className={style.chnge16}>
                <p>Total</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <button
                onClick={() => navigate("/productcheckout")}
                className={style.proceed}
              >
                Proceed To Checkout
              </button>
            </div>
            <div className={style.purpose5}>
              <button className={style.btwn}>Clear Cart</button>
              <button className={style.btwn}>Continue Shopping</button>
            </div>
          </div>
        </div>

        <div className={style.herosection}>
          <div className={style.div1}>
            <h2 className={style.div3}>You may also like</h2>
          </div>
          <div className={style.div}>
            <Card images={images1} title="Baby Wears" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
