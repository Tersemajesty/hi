import { useNavigate } from "react-router-dom";
import styles from "./Pages.module.css";
import { FaShareAlt } from "react-icons/fa";

const ProductDetails = () => {
const navigate = useNavigate()
  
  return (
    <div className={styles.productwrapper}>
      <div className={styles.productdetailsbody}>
        <h2>Product Details</h2>
      </div>
      <div className={styles.detailwrapper}>
        <div className={styles.detailproductimage}>
          <img src="public/shoe.PNG" alt="Product" />
        </div>
        <div className={styles.pricelistwrap}>
          <div className={styles.pricetextholder}>
            <h3>The Rage Of Dragons</h3>
            <p>By Evan Winter</p>
            <span>$50.00</span>
            <div className={styles.review}>
              <div className={styles.rating}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className={styles.buttonwrapper}>
              <div className={styles.buttoncart}>
                <p onClick={()=>navigate("./cart")}>Add To Cart</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionwrapper}>
        <div className={styles.descriptiondetails}>
          <h5 color="red"> Description </h5>
          
        </div>
        <div className={styles.descriptiontext}>
          <p className={styles.descriptiontextbox}>
            Beryl Cook is one of Britain’s most talented and amusing artists.
            Beryl’s pictures feature women of all shapes and sizes enjoying
            themselves. Born between the two world wars, Beryl Cook eventually
            left Kendrick School in Reading at the age of 15, where she went to
            secretarial school and then into an insurance office. After moving
            to London and then Hampton, she eventually married her next-door
            neighbor from Reading, John Cook. He was an officer in the Merchant
            Navy, and after he left the sea in 1956, they bought a pub for a
            year before John took a job in Southern Rhodesia with a motor
            company. Beryl bought their young son a box of watercolors, and when
            showing him how to use it, she decided that she herself quite
            enjoyed painting. John subsequently bought her a child’s painting
            set for her birthday, and it was with this that she produced her
            first significant work, a half-length portrait of a dark-skinned
            lady with a vacant expression and large drooping breasts. It was
            aptly named ‘Hangover’ by Beryl’s husband. It is often frustrating
            to attempt to plan meals that are designed for one. Despite this
            fact, we are seeing more and more recipe books and Internet websites
            that are dedicated to the act of cooking for one. Divorce and the
            death of spouses or grown children leaving for college are all
            reasons that someone accustomed to cooking for more than one would
            suddenly need to learn how to adjust all the cooking practices
            utilized before into a streamlined plan of cooking that is more
            efficient for one person creating less.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
