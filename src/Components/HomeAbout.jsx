import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const HomeAbout = () => {

    return (
        <div className='section-center'>
            <hr className='text-[#8b7d6b]' style={{ margin: '4rem 0px' }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-[100%] ">
                {/* <div className="bg-yellow-300">1</div> */}

                <div className=" self-center text-black" data-aos='fade-right'>
                    <h3 className='text-5xl' style={{ marginBottom: "2rem" }}>About Us</h3>
                    <p className='' style={{ fontSize: '1.2rem' }}>Essajees Atelier is a global design company offering end-to-end services in the realm of luxury interiors. We pride ourselves on our unmatched aesthetic and attention to detail, which we bring in at every stage – from planning to handovers.</p><br />
                    <p style={{ fontSize: '1.2rem' }}>We take on a select number of clients; we see ourselves as your partners right from the beginning and craft all our projects from scratch.</p>
                </div>

                <div className=" h-[500px]">
                    <img className='rounded-2xl h-[100%] w-[100%] md:object-cover object-contain' src="https://www.essajeesatelier.com/wp-content/uploads/2023/07/Sarah-Sham.jpg" alt="owner-img" />
                </div>

            </div>
        </div>
    )
}

export default HomeAbout