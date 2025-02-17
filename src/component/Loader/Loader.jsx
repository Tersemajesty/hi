import { ScaleLoader } from 'react-spinners'
// import style from "./Loader.module.css"


const Loader = () => {
    return (
      <div>
        <span className="loader"></span>
        <ScaleLoader />
      </div>
    );
  };
  
  export default Loader;