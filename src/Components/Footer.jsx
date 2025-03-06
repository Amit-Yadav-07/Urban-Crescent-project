import React from 'react'
import { links } from './data'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal text-base-content">
                <div className="section-center flex flex-col md:flex-row">

                    <address className='flex-2 text-3xl text-center self-center' style={{ padding: '2rem' }}>Essajees Atelier design LLP, 1st floor, Udyog <br />
                        Bhavan, 29, Walchand Hirachand <br />
                        Marg, Ballard Estate, Fort, <br />
                        Mumbai – 400 038
                    </address>


                    <div className="flex-1 text-center text-3xl w-[100%] md:border-l-2 border-[#544a3e]" style={{ padding: '2rem' }}>
                        <strong>Useful Links</strong>
                        {links.map((link) => {
                            return (
                                <div key={link.id}>
                                    <Link to={link.url} style={{ fontSize: '1.5rem' }}>{link.text}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </footer>
            <footer className="text-center bg-[#8B7D6B] flex justify-center" style={{ padding: '1.3rem 0px' }}>
                <p className='text-center w-[80%]'>Copyright © {new Date().getFullYear()} - All right reserved by <strong className=''>Urban Crescent</strong> Ltd</p>
            </footer>
        </>
    )
}

export default Footer