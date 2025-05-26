import React from 'react'
import style from "./clothLog.module.css"
import Card from '../component/Card/card'
import { IoArrowUndoSharp } from "react-icons/io5";


 const Formal = () => {
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

    return (
        <div className={style.formal}>
                  <IoArrowUndoSharp className={style.backwardIcon} size={30} onClick={()=>navigate(-1)}/>
            <div className={style.formalContainer}>
          <Card images={images1} title="baby wears" />
            </div>

            <div className={style.formalContainer1}>
          <Card images={images2} title="baby wears" />
            </div>

            <div className={style.formalContainer2}>
          <Card images={images3} title="baby wears" />
            </div>

            <div className={style.formalContainer3}>
          <Card images={images4} title="baby wears" />
            </div>
        </div>
    )
}
export default Formal