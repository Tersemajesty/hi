import styles from "./Footer.module.css"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiTwirlyFlower } from "react-icons/gi";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
         <div className={styles.footerText}>
            <div className={styles.newsletter}>
                   <span>Subscribe Newsletter</span>
                   <h1>Subscribe newsletter to get
                     5% on all products.</h1>
            </div>
            <div className={styles.inpuT}>
              <input type="email"
              placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
            <div className={styles.socialMedia}>
               <FaFacebook  size={25}/>
               <FaInstagram  size={25}/>
               <FaYoutube  size={25}/>
            </div>
         </div>
         <div className={styles.footerText1}>
            <div className={styles.footeriner1}>
                <GiTwirlyFlower size={45}  color="red"/>
                <header>Terses <strong>store</strong></header>
            </div>
            <div className={styles.footeriner2}>
            <h2>Shop Men</h2>
               
                    <h1>Winter</h1>
                    <h1>Summer</h1>
                    <h1>Clothing Fashion</h1>
                    <h1>Formal</h1>
                    <h1>cashual</h1>

            </div>
            <div className={styles.footeriner3}>
            <h2>Shop Women</h2>
               
               <h1>Winter</h1>
               <h1>Summer</h1>
               <h1>Clothing Fashion</h1>
               <h1>Formal</h1>
               <h1>cashual</h1>
            </div>
            <div className={styles.footeriner4}>
            <h2>Baby Collection</h2>
               
               <h1>Winter</h1>
               <h1>Summer</h1>
               <h1>Clothing Fashion</h1>
               <h1>Formal</h1>
               <h1>cashual</h1>
            </div>
            <div className={styles.footeriner5}>
            <h2>Quick Links</h2>
               
               <h1>Track your order</h1>
               <h1>Support</h1>
               <h1>FAQ</h1>
               <h1>Carrier</h1>
               <h1>About </h1>
               <h1>Contact us</h1>
            </div>
         </div>
         <div className={styles.footerText2}>
                 <p>
                 Copyright ©2025 All rights reserved | This template is made with  by <strong>Terses </strong>Store
                 </p>
         </div>
         
      </div>
    </footer>
  );
};

export default Footer