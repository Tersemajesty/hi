import React, { useEffect } from "react";
import style from "./Pages.module.css";
import Card from "../component/Card/card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";
import Loader from "../component/Loader/Loader";
const Women = () => {
  const [products, setProducts] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  const url3 =
    "https://capitalshop-3its.onrender.com/api/products/?category=6837a542de2a4a28807fb654&limit=8";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(url3);
        setProducts(res.data?.data?.products);
        console.log(res?.data?.data?.products);

        setLoader(false);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchProducts();
  }, []);
  const navigate = useNavigate();
  return loader ? (
    <Loader />
  ) : (
    <div className={style.women}>
      <div className={style.womenwrap}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={style.womenbodywrap}>
            <Card
              images={products.slice(i * 4, (i + 1) * 4)}
              title={`Formals ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Women;
