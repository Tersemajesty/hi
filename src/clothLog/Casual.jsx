import React, { useEffect } from "react";
import style from "./clothLog.module.css";
import Card from "../component/Card/card";
import { useNavigate } from "react-router-dom";
import { IoArrowUndoSharp } from "react-icons/io5";
import Loader from "../component/Loader/Loader";
import axios from "axios";

const Casual = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=68370714812fcbd690f3aba4&limit=20";

  const getAllCasualProduct = async () => {
    try {
      const response = await axios.get(url);
      setData(response?.data?.data?.products || []);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getAllCasualProduct();
  }, []);

  // const first12 = data.slice(0, 12); 

  return loader ? (
    <Loader />
  ) : (
    <div className={style.casual}>
      <IoArrowUndoSharp
        className={style.backwardIcon}
        size={30}
        onClick={() => navigate(-1)}
      />

      <div className={style.casualContainer}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.casualContainer1}>
            <Card autoplayDelay={Math.floor(Math.random() * 2000) + 3000}
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Casuals ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casual;
