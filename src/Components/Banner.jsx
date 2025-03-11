import React, { useEffect } from 'react'
import video from '../assets/images/video.mp4'
import Btn from './Btn'
import { FaArrowDown } from "react-icons/fa";
import Video from './Video';

const Banner = () => {

    return (
        <>
            <section className='banner-container'>

                <Video video={video} poster='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' height={'100%'} width={'100%'} />

                <div className='overlay-section'>
                    <h1 className='text-7xl w-[70%] text-white'>Welcome to Urban Crescent</h1>
                    <p className='w-[70%] text-white' style={{ padding: '1.2rem 0px', fontSize: '2rem' }}>We design like we own it</p>
                    <button className='btn btn-outline button' style={{ padding: '1.5rem 1rem', fontSize: '1.2rem', color: 'white' }}>Explore Our Design</button>
                    {/* <div className="hidden md:block animate-none md:animate-bounce text-2xl relative xl:top-35 lg:top-20 md:top-18 border-2 border-solid rounded-full" style={{ padding: '0.5rem' }}>
                        <FaArrowDown />
                    </div> */}
                </div>

            </section>


        </>
    )
}

export default Banner