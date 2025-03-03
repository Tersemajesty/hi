import { ScaleLoader } from 'react-spinners'
import style from "./Loader.module.css"


const Loader = () => {
    return (
      <div className={style.chi}>
        <span className={style.Loader}></span>
        <ScaleLoader />
      </div>
    );
  };
  
  export default Loader;