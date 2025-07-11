import { useState, useEffect, useRef } from "react";
import style from "./Pages.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import axios from "axios";
import Card from "../component/Card/card";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        console.log("Cart response:", res.data);
      } catch (err) {
        console.error("login in first:", err.response?.data || err.message);
        toast.error("login in first.");
      }
    };

    fetchCart();
  }, []);

  const handleIncrease = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const handleDecrease = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = async (product_id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to delete items from the cart.");
      return;
    }

    try {
      const res = await axios.delete(
        `https://capitalshop-3its.onrender.com/api/cart/clear`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { product_id },
        }
      );
      console.log("Delete response:", res.data);
      setCartItems((prev) =>
        prev.filter((item) => item.product._id !== product_id)
      );
      toast.success("Item removed from cart.");
    } catch (err) {
      console.error("Error deleting item:", err.response?.data || err.message);
      toast.error("Failed to remove item from cart.");
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item?.product?.price || 0) * item.quantity,
    0
  );

  return (
    <div className={style.Cart}>
      <ToastContainer />
      <div className={style.Cart1}>
        <h2>Your Cart</h2>
      </div>

      <div className={style.car2}>
       

        <div className={style.containerdiv}>
          {loading ? (
            <h2>Loading your cart...</h2>
          ) : cartItems.length === 0 ? (
            <h2>No products added yet</h2>
          ) : (
            <div className={style.containerdiv2}>
              {cartItems.map((item) => (
                <div key={item.product._id} className={style.purpose1}>
                  <img src={item.product.image} alt="" />
                  <h1>{item.product.name}</h1>
                  <div className={style.chnge1}>
                    <div className={style.buttondiv}>
                      <button  onClick={() => handleDecrease(item.product._id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.product._id)}>
                        +
                      </button>
                    </div>
                    <p className={style.p}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button className={style.button} onClick={() => handleDelete(item.product._id)}>
                      <RiDeleteBin6Line size={23} style={{ color: "red" }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
