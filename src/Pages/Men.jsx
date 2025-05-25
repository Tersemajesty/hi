import React from 'react'
import style from "./Pages.module.css"
import Card from "../component/Card/card"
 const Men = () => {
    const images1 = [
        { url: "/images/casual1.jpeg" },
        { url: "/images/casual2.jpeg" },
        { url: "/images/casual3.jpeg" },
        { url: "/images/casual4.jpeg" }
      ];
      
      const images2 = [
        { url: "/images/vint1.jpeg" },
        { url: "/images/vint1.jpeg" },
        { url: "/images/vint1.jpeg" },
        { url: "/images/vint1.jpeg" }
      ];

      const images3 = [
        { url: "/images/senate1.jpeg" },
        { url: "/images/senate1.jpeg" },
        { url: "/images/senate1.jpeg" },
        { url: "/images/senate1.jpeg" }
      ];

      const images4 = [
        { url: "/images/casual2.jpeg" },
        { url: "/images/casual2.jpeg" },
        { url: "/images/casual2.jpeg" },
        { url: "/images/casual2.jpeg" }
      ];
  
  
    return (
        <div className={style.men}>
          <div className={style.menwrap}>
          <div className={style.menbodywrap}>
          <Card images={images1} title="Casual Wear" />
          <Card images={images1} title="Casual Wear" />
          <Card images={images1} title="Casual Wear" />
          <Card images={images1} title="Casual Wear" />
          
          </div>
          </div>
          <div className={style.menwrap1}>
          <div className={style.menbodywrap}>
          <Card images={images2} title="Formal Wear" />
          <Card images={images2} title="Formal Wear" />
          <Card images={images2} title="Formal Wear" />
          <Card images={images2} title="Formal Wear" />
          </div>
          </div>
          <div className={style.menwrap2}>
          <div className={style.menbodywrap}>
          <Card images={images3} title="senator Wear" />
          <Card images={images3} title="senator Wear" />
          <Card images={images3} title="senator Wear" />
          <Card images={images3} title="senator Wear" />
          </div>
          </div>
          <div className={style.menwrap3}>
          <div className={style.menbodywrap}>
          <Card images={images4} title="Formal Wear" />
          <Card images={images4} title="Formal Wear" />
          <Card images={images4} title="Formal Wear" />
          <Card images={images4} title="Formal Wear" />
          </div>
          </div>
        </div>
    )
}
export default Men