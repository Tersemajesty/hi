import { Link, useNavigate } from "react-router-dom";
import style from "./Pages.module.css"

const ProductCheckout = () => {
  const navigate = useNavigate()
  return (
    <div className={style.checkoutwrapper}>
      <div className={style.checkoutwrapperbody}>
        <h2>Checkout</h2>
        
      </div>

      <div className={style.container}>
         <div className={style.returningcustomer}>
          <div className={style.returningcustomer1}>
          <p>
          Returning Customer? <Link to="/login">Click here to login</Link>
          </p>
          </div>
          <div className={style.text}>
         <p>If you have shopped with us before, please enter your details in the boxes below. 
            If you are a new customer, please proceed to the Billing & Shipping section.</p>
          </div>
          <div className={style.input}>
             <input type="text"
             placeholder="Username or Email" />

             <input type="text"
             placeholder="password" />
          </div>
          <div className={style.logGEDin}>
          <button onClick={()=>navigate("./login")}>Login</button>
            <input type="checkbox" id="create-account" />
            <label htmlFor="create-account">Create an account?</label> 
          </div>
      </div>

    </div>
    <div className={style.hold}>
          <div className={style.billing}>               
                <div className={style.bilng0}>
                <p>Shipping Details</p>
                </div>

                <div className={style.bilng2}>
                     <input type="text"
                     placeholder="First Name" />

                     <input type="text"
                     placeholder="Last Name" />
                </div>

                <div className={style.billing3}>
                  <input type="text"
                  placeholder="comapny Name" />
                </div>
                <div className={style.billing4}>
                <input type="text"
                     placeholder="phone number" />

                     <input type="text"
                     placeholder="Email Address" />
                </div>
                <div className={style.blling5}>
                <input type="text"
                  placeholder="Country" />
                </div>
                <div className={style.billing8}>
                <input type="text"
                    placeholder="postal code" />
                </div>
                  <div className={style.billing12}>
                    <p className={style.payment}>Payment</p>
                    <button className={style.botton}>place order</button>
                </div>
             
          </div>
          <div className={style.order}>
          <p>Order summary</p>
          <div>
            
          </div>
          </div>
    </div>
    </div>

  );
};

export default ProductCheckout;