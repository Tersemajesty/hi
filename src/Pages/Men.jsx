import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Pages.module.css";
import Card from "../component/Card/card";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader/Loader";

const Men = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const url =
    "https://capitalshop-3its.onrender.com/api/products/?category=683706cc812fcbd690f3ab9e&limit=8";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(url);
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

  return loader ? (
    <Loader />
  ) : (
    <div className={style.men}>
      <div className={style.menwrap}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={style.menbodywrap}>
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

export default Men;
