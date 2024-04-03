import React from 'react'
import "./mainNav.css"
import { userNavArr } from "../../dataContext/userNav";
import { NavLink } from 'react-router-dom';
export const MainNav = () => {
    return (
        <div className='MainNav'>
            <div className='img-log'> </div>
            <nav>
                {userNavArr.map(e => <NavLink className={({ isActive }) => isActive ? 'activeLink' : ""} to={e.to}>{e.icon()}</NavLink>)}
            </nav>
            <img className='userImg' src={"https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"} alt="" />
        </div>
    )
}
