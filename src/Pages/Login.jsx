import style from "./Pages.module.css"
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";


 
 const Login = () => {
    return (
        <div className={style.login}>
            <div className={style.login1}>
                  <div className={style.login2}>
                       <strong>Login</strong>
                       <h1>Enter Login details to get access</h1>
                  </div>
                  <div className={style.login3}>
                    <h1>Username or Email Address</h1>
                        <input type="text"
                        placeholder="Username/ Email Address" />
                  </div>
                  <div className={style.login4}>
                  <h1>Passwords</h1>
                        <input type="text"
                        placeholder="Enter Password" />
                  </div>
                  <div className={style.login5}>
                  <div className={style.remember}>
              <input type="checkbox"  id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
                  <div className={style.login7}>
            <a href="#">Forgot Password?</a>
                  </div>
                  </div>

                  <div className={style.login6}>
                    <NavLink to="/Signup">
                    <h1>Dont have an account ? <strong>Sign up</strong> here</h1>
                    </NavLink>
                 <button>Login</button>

                    
                  </div>
            </div>
        </div>
    )
}
export default Login