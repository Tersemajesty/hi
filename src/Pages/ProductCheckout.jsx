import { Link, useNavigate } from "react-router-dom";
import style from "./Pages.module.css";

const ProductCheckout = () => {
  const navigate = useNavigate();
  return (
    <div className={style.checkoutwrapper}>
      <div className={style.checkoutwrapperbody}>
        <h2>Checkout</h2>
      </div>

      <div className={style.hold}>
        <div className={style.billing}>
          <div className={style.bilng0}>
            <p>Shipping Details</p>
          </div>

          <div className={style.billing4}>
            <input type="text" placeholder="Street" />

            <input type="text" placeholder="State" />
          </div>
          <div className={style.blling5}>
            <input type="text" placeholder="Country" />
          </div>
          <div className={style.billing8}>
            <input type="text" placeholder="Zip code" />
          </div>
          <div className={style.billing12}>
            <p className={style.payment}>Payment</p>
            <button className={style.botton}>place order</button>
          </div>
        </div>
        <div className={style.order}>
          <p>Order summary</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
