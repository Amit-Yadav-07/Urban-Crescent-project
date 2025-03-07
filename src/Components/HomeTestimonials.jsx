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
        autoplay: true,
        pauseOnHover: true
    };

    return (
        <div className='section-center'>
            <SubHeading text='What Our Client Says' />
            {/*  */}
            <div className="slider-containe w-[70%]" style={{ margin: '0px auto 3rem auto', }}>
                <Slider {...settings}>
                    {Testimonials.map((items) => {
                        return (
                            <div className='grid place-content-center place-items-center w-[60%] min-h-[300px] max-[auto]: rounded-sm' key={items.id}>
                                <h3 className='text-[#8b7d6b] text-6xl capitalize w-[60%] text-center' style={{ marginBottom: '1rem' }}>{items.name}</h3>
                                <p className='text-black text-7xl w-[60%] text-center'>{items.message}</p>
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