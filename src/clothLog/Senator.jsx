import React, { useEffect } from "react";
import style from "./clothLog.module.css";
import Card from "../component/Card/card";
import { IoArrowUndoSharp } from "react-icons/io5";
import axios from "axios";
import Loader from "../component/Loader/Loader";

const Senator = () => {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  // const images1 = [
  //   { id: 1, url: "/images/casual1.jpeg" },
  //   { id: 2, url: "/images/casual2.jpeg" },
  //   { id: 3, url: "/images/casual3.jpeg" },
  //   { id: 4, url: "/images/casual4.jpeg" },
  // ];

  // const images2 = [
  //   { id: 5, url: "/images/vint1.jpeg" },
  //   { id: 6, url: "/images/vint2.jpeg" },
  //   { id: 7, url: "/images/vint3.jpeg" },
  //   { id: 8, url: "/images/casual5.jpeg" },
  // ];

  // const images3 = [
  //   { id: 10, url: "/images/senate1.jpeg" },
  //   { id: 10, url: "/images/senate2.jpeg" },
  //   { id: 11, url: "/images/senate3.jpeg" },
  //   { id: 12, url: "/images/senate4.jpeg" },
  // ];

  // const images4 = [
  //   { id: 13, url: "/images/casual5.jpeg" },
  //   { id: 14, url: "/images/casual6.jpeg" },
  //   { id: 15, url: "/images/casual7.jpeg" },
  //   { id: 16, url: "/images/casual9.jpeg" },
  // ];

  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=683706f8812fcbd690f3aba1";
  const getAllSenatorProduct = async() => {
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
  },[]);
  return (
    loader ? 
      <Loader /> :
      (<div className={style.senator}>
      <IoArrowUndoSharp
        className={style.backwardIcon}
        size={30}
        onClick={() => navigate(-1)}
      />
      <div className={style.senatorContainer}>
        <Card images={data} title="Senator" />
      </div>

      <div className={style.senatorContainer1}>
        <Card images={data} title="Senator" />
      </div>

      <div className={style.senatorContainer2}>
        <Card images={data} title="baby wears" />
      </div>

      <div className={style.senatorContainer3}>
        <Card images={data} title="baby wears" />
      </div>
    </div>)
    )
    
};
export default Senator;
