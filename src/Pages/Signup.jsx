import { useState } from 'react';
import axios from 'axios';
import style from './Pages.module.css';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const url = "https://capitalshop-3its.onrender.com/api/users/register";

  const handleSignup = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await axios.post(url, { name, email, password });
      toast.success(response?.data?.message);
      console.log(response);

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (err) {
      console.log(err);
      toast.error("Signup failed. Please try again.");
    }
  };

  const inputStyle = (field) => ({
    border: errors[field] ? '2px solid red' : '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '5px',
  });

  return (
    <div className={style.signup}>
      <div className={style.signupContainer}>
        <div className={style.signuphead}>
          <strong>Signup</strong>
          <h1>Create your account to get full access</h1>
        </div>

        <div className={style.signupform}>
          <h1>Full Name</h1>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle('name')}
          />
          {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        </div>

        <div className={style.signupform1}>
          <h1>Email address</h1>
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle('email')}
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>

        <div className={style.signupform2}>
          <h1>Create Password</h1>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle('password')}
          />
          {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </div>

        <div className={style.signupform4}>
          <NavLink to={"/Login"}>
            <h1>Already have an account <strong>Login here</strong></h1>
          </NavLink>
          <button onClick={handleSignup}>Sign-up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
