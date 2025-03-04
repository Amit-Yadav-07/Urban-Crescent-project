import React from 'react'
import SubHeading from './SubHeading'
import Slider from "react-slick";
import { Testimonials } from './data';


const HomeTestimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className='section-center'>
            <SubHeading text='What Our Client Says' />
            {/*  */}
            <div className="slider-container" style={{ marginBottom: '3rem' }}>
                <Slider {...settings}>
                    {Testimonials.map((items) => {
                        return (
                            <div className='bg-indigo-400 h-[400px] flex justify-center' key={items.id}>
                                <h3 className='text-black text-4xl'>{items.name}</h3>
                                <p>{items.message}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            {/*  */}

        </div>
    )
}

export default HomeTestimonials