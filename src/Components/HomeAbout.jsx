import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const HomeAbout = () => {

    return (
        <div className='section-center'>
            <hr className='text-black' style={{ margin: '4rem 0px' }} />
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 self-center text-black" data-aos='fade-right'>
                    <h3 className='text-5xl' style={{ marginBottom: "3rem" }}>About Us</h3>
                    <p className='' style={{ fontSize: '1.3rem' }}>Essajees Atelier is a global design company offering end-to-end services in the realm of luxury interiors. We pride ourselves on our unmatched aesthetic and attention to detail, which we bring in at every stage – from planning to handovers.</p><br />
                    <p style={{ fontSize: '1.3rem' }}>We take on a select number of clients; we see ourselves as your partners right from the beginning and craft all our projects from scratch.</p>
                </div>
                <div className="flex-1 w-[100%]">
                    {/* <img className='rounded-2xl h-[100%] w-[100%] md:object-cover object-fill' src="https://images.pexels.com/photos/7633658/pexels-photo-7633658.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /> */}
                    <div className="bg-[url('https://www.essajeesatelier.com/wp-content/uploads/2023/07/Sarah-Sham.jpg')] w-[100%] min-h-[700px] h-auto rounded-md" data-aos='fade-left'></div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout