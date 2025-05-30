import React, { useEffect } from "react";
import style from "./clothLog.module.css";
import Card from "../component/Card/card";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import axios from "axios";

const Summer = () => {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const navigate = useNavigate();
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=6837079b812fcbd690f3abaa&limit=12";
  const getAllSummerProduct = async () => {
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
    getAllSummerProduct();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className={style.summer}>
      <IoArrowUndoSharp
        className={style.backwardIcon}
        size={30}
        onClick={() => navigate(-1)}
      />

      <div className={style.summerContainer3}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.summerContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Summer Collection ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Summer;
