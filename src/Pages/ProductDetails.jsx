import { data, useNavigate, useParams } from "react-router-dom";
import styles from "./Pages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
        console.log(res);
        setProduct(res?.data?.data);
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

  const myToken = localStorage.getItem("token");
  console.log(myToken);
  const url1 = `https://capitalshop-3its.onrender.com/api/cart/add`;
  const addToCart = async () => {
    console.log(myToken)
    try {
      const res = await axios.post(
        url1,
        { productId: product._id, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${myToken}` },
        }
      );
      console.log(res);
      toast.success("Product added to cart", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
            <p>{product.stock}</p>
            <span>${product.price}</span>
            <div className={styles.review}>
              <p>Reviews: {product.reviews ? product.reviews.length : 0}</p>
            </div>
            <div className={styles.buttonwrapper}>
              <div className={styles.buttoncart} onClick={addToCart}>
                <p>Add To Cart</p>
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
