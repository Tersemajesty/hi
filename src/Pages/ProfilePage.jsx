import React from 'react'
import style from "./pages.module.css"

 const ProfilePage = () => {
    return (
        <div className={style.ProfilePage}>
            <div className={style.ProfilePage__container}>
                <h1 className={style.ProfilePage__title}>Profile</h1>
                <div className={style.ProfilePage__content}>
                    <p className={style.ProfilePage__text}>This is the profile page.</p>
                </div>

            </div>
        </div>
    )
}
export default ProfilePage