import React, { useEffect } from "react";
import style from "./clothLog.module.css";
import Card from "../component/Card/card";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader/Loader";

const Formal = () => {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  const navigate = useNavigate();
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=68370737812fcbd690f3aba7";
  const getAllFormalProduct = async () => {
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
    getAllFormalProduct();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className={style.formal}>
    
      <div className={style.formalContainer}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={style.formalContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Formals ${i + 1}`}
            />
          </div>
        ))}
      </div>

      
    </div>
  );
};
export default Formal;
