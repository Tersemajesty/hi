import { useNavigate, useParams } from "react-router-dom";
import styles from "./Pages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://capitalshop-3its.onrender.com/api/products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(url);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.productwrapper}>
      <div className={styles.productdetailsbody}>
        <h2>Product Details</h2>
      </div>
      <div className={styles.detailwrapper}>
        <div className={styles.detailproductimage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.pricelistwrap}>
          <div className={styles.pricetextholder}>
            {/* Dynamic product data */}
            <h3>{product.name}</h3>
            <p>{product.author || "Unknown Author"}</p>
            <span>${product.price}</span>
            <div className={styles.review}>
              <div className={styles.rating}>
                {/* Optional: replace with real ratings */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className={styles.buttonwrapper}>
              <div className={styles.buttoncart}>
                <p onClick={() => navigate("/cart")}>Add To Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionwrapper}>
        <div className={styles.descriptiondetails}>
          <h5>Description</h5>
        </div>
        <div className={styles.descriptiontext}>
          <p className={styles.descriptiontextbox}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
