import React from "react";
import style from "./Pages.module.css";
import axios from "axios";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const url = "https://capitalshop-3its.onrender.com/api/users/logout";
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, user is not logged in.");
      return;
    }
    try {
      const response = await axios.post(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        localStorage.removeItem("token"); // Clear token from local storage
        navigate = "/login"; // Redirect to home page after logout
      } else {
        console.error("Logout failed:", data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={style.ProfilePage}>
      <div className={style.ProfilePage__container}>
        <button className={style.btn} onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;
