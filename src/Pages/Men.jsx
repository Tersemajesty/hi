import React, { useEffect } from "react";
import style from "./Pages.module.css";
import Card from "../component/Card/card";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Men = () => {
  
  const url2 = "https://capitalshop-3its.onrender.com/api/products/{id}"
  
  useEffect(()=> {
    const getOneproduct = async(id)=>{
      try {
        const res = await axios.get(`${url2}${id}`)
        console.log(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

  })
  
  const images1 = [
    { id:1, url: "/images/casual1.jpeg" },
    { id:2, url: "/images/casual2.jpeg" },
    { id:3, url: "/images/casual3.jpeg" },
    { id:4, url: "/images/casual4.jpeg" },
  ];
  const images2 = [
    { id:5, url: "/images/vint1.jpeg" },
    { id:6, url: "/images/vint2.jpeg" },
    { id:7, url: "/images/vint3.jpeg" },
    { id:8, url: "/images/casual5.jpeg" },
  ];

  const images3 = [
    {id:10, url: "/images/senate1.jpeg" },
    {id:10, url: "/images/senate2.jpeg" },
    {id:11, url: "/images/senate3.jpeg" },
    {id:12, url: "/images/senate4.jpeg" },
  ];

  const images4 = [
    {id:13, url: "/images/casual5.jpeg" },
    {id:14, url: "/images/casual6.jpeg" },
    {id:15, url: "/images/casual7.jpeg" },
    {id:16, url: "/images/casual9.jpeg" },
  ];
 const navigate = useNavigate()
  return (
    <div className={style.men}>
      <IoArrowUndoSharp className={style.backwardIcon} size={30} onClick={()=>navigate(-1)}/>
      <div className={style.menwrap}>
        <div className={style.menbodywrap}>
          <Card  images={images1} title="Casual Wear"  />
          
        </div>
      </div>
      <div className={style.menwrap1}>
        <div className={style.menbodywrap}>
          <Card images={images2} title="Formal Wear" />
        </div>
      </div>
      <div className={style.menwrap2}>
        <div className={style.menbodywrap}>
          <Card images={images3} title="senator Wear" />
        </div>
      </div>
      <div className={style.menwrap3}>
        <div className={style.menbodywrap}>
          <Card images={images4} title="Formal Wear" />

        </div>
      </div>
    </div>
  );
};
export default Men;
