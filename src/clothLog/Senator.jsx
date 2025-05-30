import React, { useEffect } from "react";
import style from "./clothLog.module.css";
import Card from "../component/Card/card";
import { IoArrowUndoSharp } from "react-icons/io5";
import axios from "axios";
import Loader from "../component/Loader/Loader";

const Senator = () => {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=683706f8812fcbd690f3aba1&limit=20";
  const getAllSenatorProduct = async () => {
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
    getAllSenatorProduct();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className={style.senator}>
      <IoArrowUndoSharp
        className={style.backwardIcon}
        size={30}
        onClick={() => navigate(-1)}
      />
      <div className={style.senatorContainer}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.senatorContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Senators ${i + 1}`}
            />
          </div>
        ))}
      </div>

     

      

      
    </div>
  );
};
export default Senator;
