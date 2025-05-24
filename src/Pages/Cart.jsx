import { useState } from "react";
import style from "./Pages.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {  useNavigate } from "react-router";
import Card from "../component/Card/card"

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Minimalistic shop for multipurpose use",
      price: 360,
      quantity: 2,
    },
    {
      id: 2,
      title: "Minimalistic shop for multipurpose use",
      price: 360,
      quantity: 2,
    },
  ]);

  const images1 = [
    { url: "/images/img6.jpeg" },
    { url: "/images/img5.jpeg" },
    { url: "/images/img6.jpeg" },
    { url: "/images/img6.jpeg" }
  ];

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

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
          <div key={item.id} className={style.purpose1}>
            <h1>{item.title}</h1>
            <div className={style.chnge1}>
              <div className={style.buttondiv}>
                <button onClick={() => handleDecrease(item.id)} style={{color: "black"}}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)} style={{color: "black"}}>+</button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleDelete(item.id)}><RiDeleteBin6Line size={16} style={{color: "red", background: "white"}} /></button>
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
              <p>shipping</p>
              <p>free</p>
            </div>
            <div className={style.chnge16}>
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <button onClick={()=>navigate("/productcheckout")} className={style.proceed}>Proceed To Checkout</button>
          </div>
          <div className={style.purpose5}>
          <button className={style.btwn}>clear Cart</button>
          <button className={style.btwn}>Continue Shopping</button>
          </div>
        </div>
      </div>

        <div className={style.herosection}>
        <div className={style.div1}>
        <h2 className={style.div3}>you may also like</h2>
        </div>
       <div className={style.div}>
       <Card images={images1} title="baby  wears" />
        <Card images={images1} title="baby  wears" />
        <Card images={images1} title="baby  wears" />
        <Card images={images1} title="baby  wears" />

       </div>
        </div>
    </div>
      </div>
  );
};

export default Cart;
