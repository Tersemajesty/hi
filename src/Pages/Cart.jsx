import { useState } from "react";
import style from "./Pages.module.css";

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

  return (
    <div className={style.Cart}>
      <div className={style.Cart1}>
        <div className={style.style}>
          <h2>Cart</h2>
          <h2>Home</h2>
        </div>
      </div>

      <div className={style.car2}>
        <div className={style.purpose}>
          <h1>Product</h1>
          <div className={style.chnge}>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className={style.purpose1}>
            <h1>{item.title}</h1>
            <div className={style.chnge1}>
              <p>${item.price.toFixed(2)}</p>
              <div>
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}

        <div className={style.herosection}>
          <button>Update Cart</button>
          <button>Close Coupon</button>
        </div>

        <div className={style.purpose4}>
          <h1>Order Summary</h1>
          <div className={style.chnge3}>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={style.wrap}>
        {/* You can put shipping details or promo code input here */}
      </div>

      <div className={style.unner}>
        <button>Continue Shopping</button>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
