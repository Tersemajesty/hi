import React, { useEffect } from "react";
import style from "./clothBabies.module.css";
import Card from "../component/Card/card";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import axios from "axios";

const Ball = () => {
  const navigte = useNavigate();
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=683853c1e87826e2ffecd3bd&limit=20";
  const getAllBallProduct = async () => {
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
    getAllBallProduct();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className={style.ball}>
      <div className={style.ballContainer}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.ballContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Ball Collection ${i + 1}`}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};
export default Ball;
