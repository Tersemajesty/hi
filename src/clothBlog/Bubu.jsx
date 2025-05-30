import React, { useEffect } from "react";
import style from "./clothBlog.module.css";
import Card from "../component/Card/card";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import axios from "axios";

const Bubu = () => {
  const navigte = useNavigate();
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=6837cd51de2a4a28807fbaf8&limit=20";
  const getAllBubuProduct = async () => {
    try {
      const response = await axios.get(url);
      setData(response?.data?.data?.products);
      console.log(response?.data?.data?.products);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  useEffect(() => {
    getAllBubuProduct();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className={style.bubu}>
      <div className={style.bubuContainer}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.bubuContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Bubu Collection ${i + 1}`}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};
export default Bubu;
