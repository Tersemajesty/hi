import React, { useEffect } from 'react'
import style from "./clothLog.module.css"
import Card from '../component/Card/card'
import { useNavigate } from 'react-router-dom';
import { IoArrowUndoSharp } from "react-icons/io5";
import Loader from "../component/Loader/Loader"
import axios from 'axios';


 const Casual = () => {
  //   const images1 = [
  //       { id:1, url: "/images/casual1.jpeg" },
  //       { id:2, url: "/images/casual2.jpeg" },
  //       { id:3, url: "/images/casual3.jpeg" },
  //       { id:4, url: "/images/casual4.jpeg" },
  //     ];

  //     const images2 = [
  //       { id:5, url: "/images/vint1.jpeg" },
  //       { id:6, url: "/images/vint2.jpeg" },
  //       { id:7, url: "/images/vint3.jpeg" },
  //       { id:8, url: "/images/casual5.jpeg" },
  //     ];

  //     const images3 = [
  //   {id:10, url: "/images/senate1.jpeg" },
  //   {id:10, url: "/images/senate2.jpeg" },
  //   {id:11, url: "/images/senate3.jpeg" },
  //   {id:12, url: "/images/senate4.jpeg" },
  // ];

  //      const images4 = [
  //   {id:13, url: "/images/casual5.jpeg" },
  //   {id:14, url: "/images/casual6.jpeg" },
  //   {id:15, url: "/images/casual7.jpeg" },
  //   {id:16, url: "/images/casual9.jpeg" },
  // ];
  const navigate = useNavigate()
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

const url = "https://capitalshop-3its.onrender.com/api/products?category=68370714812fcbd690f3aba4";
const getAllCasualProduct = async() => {
    try {
      const response = await axios.get(url);
      setData(response?.data?.data?.products);
      console.log(response?.data?.data?.products);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }
  useEffect(() => {
    getAllCasualProduct();},[]);
    return (
       loader ?
       <Loader/> :
        <div className={style.casual}>
        <IoArrowUndoSharp className={style.backwardIcon} size={30} onClick={()=>navigate(-1)}/>
          
        <div className={style.casualContainer}>
          <Card images={data} title="casuals" />
            </div>

            <div className={style.casualContainer1}>
          <Card images={data} title="casuals" />
            </div>

            <div className={style.casualContainer2}>
          <Card images={data} title="casuals" />
            </div>

            <div className={style.casualContainer3}>
          <Card images={data} title="casuals" />
            </div>
        </div>
    )
}
export default Casual