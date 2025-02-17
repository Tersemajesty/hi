import style from "./Pages.module.css"

 const Cart = () => {
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
                  <p>Quality</p>
                  <p>Total</p>
                 </div>
           </div>
           <div className={style.purpose1}>
           <h1>
           Minimalistic shop for multipurpose use</h1>
                <div className={style.chnge1}>
                <p>$360.00</p>
                <p>$720.00</p>
                <p>$720.00</p>

                </div>
               
           </div>
           <div className={style.purpose2}>
           <h1>
           Minimalistic shop for multipurpose use</h1>
                <div className={style.chnge2}>
                <p>$360.00</p>
                <p>$720.00</p>
                <p>$720.00</p>

                </div>
           </div>
           <div className={style.herosection}>
           <button>Update cart</button>
           <button>Close Coupon</button>

           </div>
           <div className={style.purpose4}>
            <h1>.</h1>
                <div className={style.chnge3}>
                <p>Subtotal</p>
                <p>	
                $2160.00</p>
                </div>
           </div>
        </div>
        <div className={style.wrap}>

        </div>
        <div className={style.unner}>
           <button>Continue Shipping</button>
           <button>Procced to Checkout</button>

        </div>
       
       </div>
    )
}
export default Cart 