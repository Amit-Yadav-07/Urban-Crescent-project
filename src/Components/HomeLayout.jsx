import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
// import { IoLogoWhatsapp } from "react-icons/io";
import Whatsapp from '../assets/images/whatsapp (1).png'



const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Link to='https://api.whatsapp.com/send?phone=8795881802' target='_blank' className='fixed md:bottom-10 md:right-10 bottom-5 right-5 w-auto'><img src={Whatsapp} alt="" className='h-[65px]' /></Link>
            {/* <ReactWhatsapp number='8795881802' /> */}
        </>
    )
}

export default HomeLayout