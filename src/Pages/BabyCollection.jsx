import React from 'react'
import style from "./Pages.module.css"
import Card from "../component/Card/card"
 const BabyCollection = () => {
    const images1 = [
        { url: "/images/img6.jpeg" },
        { url: "/images/baby.jpeg" },
        { url: "/images/baby2.jpeg" },
        { url: "/images/img6.jpeg" }
      ];
      
      const images2 = [
        { url: "/images/baby2.jpeg" },
        { url: "/images/baby1.jpeg" },
        { url: "/images/baby2.jpeg" },
        { url: "/images/img6.jpeg" },
      ];

      const images3 = [
        { url: "/images/baby.jpeg" },
        { url: "/images/img6.jpeg" },
        { url: "/images/baby.jpeg" }, 
        { url: "/images/baby2.jpeg" }
      ];
  
      const images4 = [
        { url: "/images/baby1.jpeg" },
        {url: "/images/baby.jpeg" },
        { url: "/images/baby1.jpeg" },
        { url: "/images/baby2.jpeg" }
      ];
  
  
    return (
        <div className={style.baby}>
          <div className={style.babywrap}>
          <div className={style.babybodywrap}>
          <Card images={images1} title="baby wears" />
          
          </div>
          </div>
          <div className={style.babywrap1}>
          <div className={style.babybodywrap}>
          <Card images={images2} title="Formal Wear" />
          
          </div>
          </div>
          <div className={style.babywrap2}>
          <div className={style.babybodywrap}>
          <Card images={images3} title="Formal Wear" />
          
          </div>
          </div>
          <div className={style.babywrap3}>
          <div className={style.babybodywrap}>
          <Card images={images4} title="Formal Wear" />
          </div>
          </div>
        </div>
    )
}
export default BabyCollection