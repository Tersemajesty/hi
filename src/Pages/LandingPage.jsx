import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners"; 
import style from "./Pages.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2000); 

    setTimeout(() => {
      navigate("/home");
    }, 2500);
  }, [navigate]);

  return (
    <div className={style.landingcontainer}>
      {loadingScreen ? (
        <div className={style.loader}>
          <ScaleLoader  /> 
        </div>
      ) : (
        <h1>Welcome to Our Website!</h1>
      )}
    </div>
  );
};

export default LandingPage;
