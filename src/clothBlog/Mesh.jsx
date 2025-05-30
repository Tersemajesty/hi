import React, { useEffect } from "react";
import style from "./clothBlog.module.css";
import Card from "../component/Card/card";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import axios from "axios";

const Mesh = () => {
  const navigte = useNavigate();
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const url =
    "https://capitalshop-3its.onrender.com/api/products?category=6837cd32de2a4a28807fbaf5&limit=20";
  const getAllMeshProduct = async () => {
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
    getAllMeshProduct();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className={style.mesh}>
      <div className={style.meshContainer}>
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div key={i} className={style.meshContainer1}>
            <Card
              images={data.slice(i * 4, (i + 1) * 4)}
              title={`Mesh Collection ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Mesh;
