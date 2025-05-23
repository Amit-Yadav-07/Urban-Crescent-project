import React, { useEffect } from 'react'
import Video from './Video'
import BannerVideo from '../assets/Videos/video.mp4'
import Btn from './Btn'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <>
            <section className='banner-container'>
                <Video video={BannerVideo} poster='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' height={'100%'} width={'100%'} />

                <div className='overlay-section'>
                    <h1 className='text-5xl lg:text-7xl w-[70%] text-white' data-aos='fade-right'>Welcome to Urban Crescent</h1>
                    <p className='w-[70%] uppercase tracking-widest' data-aos='fade-left' style={{ padding: '1.2rem 0px' }}>We design like we own it</p>
                    <Link to='/studio' className='btn btn-outline button' data-aos='fade-up' style={{ padding: '1.5rem 1rem', fontSize: '1rem', color: 'white' }}>Explore Our Design</Link>
                    {/* <div className="hidden md:block animate-none md:animate-bounce text-2xl absolute bottom-10 border-2 border-solid rounded-full" style={{ padding: '0.5rem' }}>
                        <FaArrowDown />
                    </div> */}
                </div>

            </section>


        </>
    )
}

export default Banner