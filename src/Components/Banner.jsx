import React from 'react'
import video from '../assets/images/video.mp4'
import Btn from './Btn'
import { FaArrowDown } from "react-icons/fa";


const Banner = () => {
    return (
        <>
            <section className='banner-container'>
                <video autoPlay loop muted playsInline poster='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' className='h-[100%] w-[100%] object-cover'>
                    <source src={video} type='video/mp4' />
                </video>

                <div className='overlay-section'>
                    <h1 className='text-7xl w-[70%] text-white'>Welcome to Urban Crescent</h1>
                    <p className='w-[70%] text-white' style={{ padding: '1.2rem 0px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet minus voluptas debitis sed unde?</p>
                    <button className='btn btn-outline button' style={{ padding: '1.5rem 1rem', fontSize: '1.2rem', color: 'white' }}>Explore Our Design</button>
                    <div className="lg:black animate-none md:animate-bounce absolute lg:bottom-7 text-3xl border-2 border-solid rounded-full" style={{ padding: '0.5rem' }}>
                        <FaArrowDown />
                    </div>
                </div>

            </section>


        </>
    )
}

export default Banner