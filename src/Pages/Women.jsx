import React from "react";
import style from "./Pages.module.css";
import Card from "../component/Card/card";
const Women = () => {
  const images1 = [
    { url: "/images/mesh1.jpeg" },
    { url: "/images/mesh2.jpeg" },
    { url: "/images/mesh3.jpeg" },
    { url: "/images/mesh4.jpeg" },
  ];

  const images2 = [
    { url: "/images/mesh2.jpeg" },
    { url: "/images/mesh4.jpeg" },
    { url: "/images/mesh1.jpeg" },
    { url: "/images/img10.jpeg" },
  ];

  const images3 = [
    { url: "/images/mesh2.jpeg" },
    { url: "/images/mesh2.jpeg" },
    { url: "/images/mesh2.jpeg" },
    { url: "/images/mesh2.jpeg" },
  ];

  const images4 = [
    { url: "/images/mesh4.jpeg" },
    { url: "/images/mesh2.jpeg" },
    { url: "/images/mesh4.jpeg" },
    { url: "/images/mesh1.jpeg" },
  ];

  return (
    <div className={style.women}>
      <div className={style.womenwrap}>
        <div className={style.womenbodywrap}>
          <Card images={images1} title="mesh wears" />
          {/* <Card images={images1} title="mesh Wears" />
          <Card images={images1} title="mesh wears" />
          <Card images={images1} title="mesh wears" /> */}
        </div>
      </div>
      <div className={style.womenwrap1}>
        <div className={style.womenbodywrap}>
          <Card images={images2} title="Formal Wear" />
          {/* <Card images={images2} title="Formal Wear" />
          <Card images={images2} title="Formal Wear" />
          <Card images={images2} title="Formal Wear" /> */}
        </div>
      </div>
      <div className={style.womenwrap2}>
        <div className={style.womenbodywrap}>
          <Card images={images3} title="Formal Wear" />
          {/* <Card images={images3} title="Formal Wear" />
          <Card images={images3} title="Formal Wear" />
          <Card images={images3} title="Formal Wear" /> */}
        </div>
      </div>
      <div className={style.womenwrap3}>
        <div className={style.womenbodywrap}>
          <Card images={images4} title="Formal Wear" />
          {/* <Card images={images4} title="Formal Wear" />
          <Card images={images4} title="Formal Wear" />
          <Card images={images4} title="Formal Wear" /> */}
        </div>
      </div>
    </div>
  );
};
export default Women;
