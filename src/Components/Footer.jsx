import React from 'react'
import { links } from './data'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/UC-logo.png'
import { FaInstagram, FaXTwitter, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer className="footer-container text-neutral-content text-center">

                <div className='section-center flex md:flex-row flex-col lg:gap-0 gap-10'>

                    <section className='flex-1 justify-center text-2xl h-[100px] self-center'>
                        <img src={Logo} alt="logo" className='w-[100%] h-[100%] object-contain' />
                        {/* <em className='text-center block' style={{ margin: "-1.5rem 0px 1rem 0px" }}> We design like we own it</em> */}

                    </section>

                    <nav className='flex-1 justify-center text-1xl text-center w-[100%]'>
                        <h6 className="footer-title">useful Links</h6>
                        {links.map((link) => {
                            return (
                                <div key={link.id} className='capitalize text-center w-[100%]'>
                                    <Link to={link.url} style={{ fontSize: '1.2rem' }}>{link.text}</Link>
                                </div>
                            )
                        })}
                    </nav>


                    <div className='flex-1 self-center gap-3'>
                        <div className='flex justify-evenly text-2xl gap-3'>
                            <Link><FaFacebook /></Link>
                            <Link><FaInstagram /></Link>
                            <Link><FaXTwitter /></Link>
                            <Link><FaLinkedin /></Link>
                        </div>
                    </div>

                </div>

                <hr className='w-[85%]' style={{ margin: '1rem auto' }} />

                <div className='section-center flex flex-col lg:flex-row footer sm:footer-horizontal lg:gap-0 gap-10'>

                    <div className='footer-part-1 flex lg:grow-1 w-[100%] self-center justify-center'>
                        <div className='self-center'><FaLocationDot className='text-2xl self-center' /></div>
                        <div className=''>
                            <h6 className='text-2xl' style={{ margin: '0px 0px 0.5rem 0px' }}>Find Us</h6>
                            <address className='text-1xl'>820, Omaxe New Hazratganj <br /> Sec-6, GOMTINAGAR - 226022</address>
                        </div>
                    </div>

                    <div className='footer-part-1 flex lg:grow-2 w-[100%] justify-center'>
                        <div className='self-center'><FaPhoneAlt className='text-2xl self-center' /></div>
                        <div className=''>
                            <h6 className='text-2xl text-white' style={{ margin: '0px 0px 0.5rem 0px' }}>Call Us</h6>
                            <em className=''>+ 91 9721479125 , 9721479125</em>
                        </div>
                    </div>

                    <div className='footer-part-1 flex lg:grow-1 w-[100%] justify-center'>
                        <div className='self-center'><IoIosMail className='text-4xl self-center' /></div>
                        <div className=''>
                            <h6 className='text-2xl' style={{ margin: '0px 0px 0.5rem 0px' }}>Mail Us</h6>
                            <Link>urbancrescent99@gmail.com</Link>
                        </div>
                    </div>

                </div>

                <hr className='w-[85%] text-white' style={{ margin: '1rem auto' }} />
            </footer>

            <footer className="text-center bg-[#8B7D6B] flex justify-center" style={{ paddingBottom: '1rem ' }}>
                <em className='text-center text-white w-[80%]'>Copyright © {new Date().getFullYear()} - All right reserved by <strong>Urban Crescent</strong></em>
            </footer>
        </>
    )
}

export default Footer