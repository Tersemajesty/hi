import { useNavigate, useParams } from "react-router-dom";
import styles from "./Pages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../component/Loader/Loader";

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
        console.error("Login first:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = async () => {
    const rawToken = localStorage.getItem("token");
    const token = rawToken?.replace(/^"(.*)"$/, "$1"); // Removes quotes

    if (!token) {
      toast.error("You must be logged in to add items to the cart.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      const res = await axios.post(
        "https://capitalshop-3its.onrender.com/api/cart/add",
        {
          productId: product._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Add to cart response:", res.data);
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error(
        "Add to cart error:",
        error.response?.data || error.message
      );
      toast.error(
        error?.response?.data?.message ||
          "Failed to add to cart. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.productwrapper}>
      <ToastContainer />
      <div className={styles.productdetailsbody}>
        <h2>Product Details</h2>
      </div>
      <div className={styles.detailwrapper}>
        <div className={styles.detailproductimage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.pricetextholder}>
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
