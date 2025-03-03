import { useState } from 'react';
import axios from 'axios';
import style from './Pages.module.css'
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';


 const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const url ="https://capitalshop-3its.onrender.com/api/users/register"

   
   const handleSignup = async(e) => {
      e.preventDefault();
      try{
  const response = await axios.post(url, {name, email, password})
  toast.success(response?.data?. message )

  console.log(response)

      } 
      catch(err){
  console.log(err)
      }
  }
   
    return (
        <div className={style.signup}>
            <div className={style.signupContainer}>
               <div className={style.signuphead}>
                 <strong>Signup</strong>
                 <h1>Create your account to get full access</h1>
               </div>
               <div className={style.signupform}>
                  <h1>Full Name</h1>
                  <input type="text" 
                  placeholder='Enter full name'
                  value={name} 
                  onChange={(e)=> setName(e.target.value)}
                  
                  />
               </div>
               <div className={style.signupform1}>
               <h1>Email address</h1>
                  <input type="text" 
                  placeholder='Email address'
                  value={email} 
                  onChange={(e)=> setEmail(e.target.value)}/>
               </div>
               <div className={style.signupform2}>
               <h1>Create Password</h1>
                  <input type="text" 
                  placeholder='Enter Password'
                  value={password} 
                  onChange={(e)=> setPassword(e.target.value)}/>
               </div>
               <div className={style.signupform3}>
               <h1>Confirm Password</h1>
                  <input type="text" 
                  placeholder='Confirm Password'/>
               </div>
               <div className={style.signupform4}>
                         <NavLink to={"/Login"}>
                         <h1>Already have an account <strong>Login here</strong></h1>

                         </NavLink>
                         <button onClick={handleSignup}>Sign-up</button>

               </div>
            </div>
        </div>
    )
}
export default Signup