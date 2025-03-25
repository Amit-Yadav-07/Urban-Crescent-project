import React from 'react'
import { links } from './data'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/UC-logo.png'

const Footer = () => {
    return (
        <>
            <footer className="footer-container text-neutral-content text-center">
                <div className='section-center flex flex-col lg:flex-row footer sm:footer-horizontal'>

                    <section className='flex-1 justify-center text-2xl'>
                        <img src={Logo} alt="logo" className='w-[100%] h-[70%] object-contain' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae non odit voluptates. Quasi, voluptates iste quae, totam delectus consectetur.</p>
                    </section>

                    <nav className='flex-1 justify-center text-2xl text-center w-[100%]'>
                        <h6 className="footer-title">useful Links</h6>
                        {links.map((link) => {
                            return (
                                <div key={link.id} className='capitalize text-center w-[100%]'>
                                    <Link to={link.url} style={{ fontSize: '1.2rem' }}>{link.text}</Link>
                                </div>
                            )
                        })}
                    </nav>

                    <address className='flex-1 justify-center text-center text-2xl w-[100%]'>
                        <h6 className="footer-title  w-[100%] text-center">Address</h6>
                        820, Omaxe New Hazratganj <br /> Sec-6, GOMTINAGAR - 226022
                    </address>
                </div>
            </footer>

            <footer className="text-center bg-[#8B7D6B] flex justify-center" style={{ padding: '1.3rem 0px' }}>
                <p className='text-center text-white w-[80%]'>Copyright © {new Date().getFullYear()} - All right reserved by <strong className=''>Urban Crescent</strong></p>
            </footer>
        </>
    )
}

export default Footer