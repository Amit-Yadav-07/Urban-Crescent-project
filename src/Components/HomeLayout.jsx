import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
// import { IoLogoWhatsapp } from "react-icons/io";
import Whatsapp from '../assets/images/whatsapp (1).png'
import { ThemeContext } from '../ThemeContext';

const HomeLayout = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer />

            <button className='fixed z-50 bottom-10 left-7 text-3xl' onClick={() => { toggleTheme(!theme) }}>
                {theme === "light" ? "🌙" : "☀️"}
            </button>

            <div className='fixed z-50 bottom-6 right-6'>
                <Link to='https://api.whatsapp.com/send?phone=8795881802' target='_blank' className='w-auto'><img src={Whatsapp} alt="whatsapp-icon" className='h-[50px]' /></Link>
            </div>

            {/* <ReactWhatsapp number='8795881802' /> */}
        </div>
    )
}

export default HomeLayout