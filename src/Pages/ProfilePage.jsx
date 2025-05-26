import React from 'react'
import style from "./Pages.module.css"

 const ProfilePage = () => {
    
    const url = "https://capitalshop-3its.onrender.com/api/users/logout";

    const handleLogout = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
                
            } else {
                console.error('Logout failed:', data.message);
            }
        } catch (error) {
            console.error( error.message);
        }
    }

    return (
        <div className={style.ProfilePage}>
            <div className={style.ProfilePage__container}>
            <button className={style.btn} onClick={handleLogout}>logout</button>
            </div>
        </div>
    )
}
export default ProfilePage