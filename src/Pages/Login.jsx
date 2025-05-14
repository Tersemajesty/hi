import { useState } from "react";
import style from "./Pages.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


 
 const Login = () => {
      const[password, setPassword] = useState ("")
      const[email, setEmail] = useState ("")
      console.log(email)
      const navigate = useNavigate()

      const url = "https://capitalshop-3its.onrender.com/api/users/login"
      const baseUrl = 'http://localhost:9898'
      const handleLogin = async (e) =>{
       e.preventDefault();
       try{
      const response = await axios.post(url,{password,email,baseUrl})
      console.log(response)
      if (response?.status === 200) {
            localStorage.setItem("token", JSON.stringify(response?.data?.token))
            toast.success("Login Successful");
            navigate('/home')
       }
       } catch(err){
          console.log(err);
          toast.error("Account already exist ");
        }
      }
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
                        placeholder=" Email Address"
                        value={email}
                        onChange={(e) => setEmail(e .target.value)} />
                  </div>
             <div className={style.login4}>
                  <h1>Passwords</h1>
                        <input type="text"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e .target.value)} /> 
                  </div>
                  <div className={style.login5}>
                  <div className={style.remember}>
              <input type="checkbox"  id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
                  <div className={style.login7}>
                        <NavLink  to={"/Signup"}>
                  <a href="#">Forgot Password?</a>
                        </NavLink>
                  </div>
                  </div>

                  <div className={style.login6}>
                    <NavLink to="/Signup">
                    <h1>Dont have an account ? <strong>Sign up</strong> here</h1>
                    </NavLink>
                 <button onClick={handleLogin}>Login</button>

                    
                  </div>
            </div>
        </div>
    )
}
export default Login