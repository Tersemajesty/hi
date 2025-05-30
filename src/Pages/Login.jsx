import { useState } from "react";
import style from "./Pages.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [loading,setLoading] = useState("");
  console.log(email);
  const navigate = useNavigate();

  const url = "https://capitalshop-3its.onrender.com/api/users/login";
  const baseUrl = "http://localhost:9898";
  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setError(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await axios.post(url, { password, email, baseUrl });
      console.log(response);
      if (response?.status === 200) {
        localStorage.setItem("token",response?.data?.token);
        toast.success("Login Successful");
        navigate("/");
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      toast.error("Login failed ");
    }
    finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    border: error[field] ? "2px solid red" : "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    width: "100%",
    marginBottom: "5px",
  });

  return (
    <div className={style.login}>
      <ToastContainer />
      <div className={style.login1}>
        <div className={style.login2}>
          <strong>Login</strong>
          <h1>Enter Login details to get access</h1>
        </div>
        <div className={style.login3}>
          <h1>Username or Email Address</h1>
          <input
            type="text"
            placeholder=" Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ ...inputStyle("email") }}
          />
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>

        <div className={style.login4}>
          <h1>Passwords</h1>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle(password)}
          />
          {error.name && <small style={{ color: "red" }}>{errors.name}</small>}
        </div>

        <div className={style.login5}>
          <div className={style.remember}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Keep me logged in</label>
          </div>
          <div className={style.login7}>
            <NavLink to={"/Signup"}>
              <a href="#">Forgot Password?</a>
            </NavLink>
          </div>
        </div>

        <div className={style.login6}>
          <NavLink to="/Signup">
            <h1>
              Dont have an account ? <strong>Sign up</strong> here
            </h1>
          </NavLink>
          <button onClick={handleLogin} disabled={loading}> {loading ?" Logging in....." : "Login"}</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
