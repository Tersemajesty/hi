import React, { useEffect } from "react";
import style from "./clothBlog.module.css";
import Card from "../component/Card/card";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import axios from "axios";

const Dinner = () => {
  const navigte = useNavigate();
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=6837cd64de2a4a28807fbafb&limit=20";
  const getAllDinnerProduct = async () => {
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
    getAllDinnerProduct();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className={style.dinner}>
      <div className={style.dinnerContainer}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.dinnerContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Dinner Collection ${i + 1}`}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};
export default Dinner;
