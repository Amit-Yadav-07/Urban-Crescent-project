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
            <SubHeading text='What Our Client Says' style={'3rem auto 3rem auto'} />

            <div className="md:w-[100%] test" data-aos='fade-right' style={{ margin: '0px auto 3rem auto', padding: "0rem 0px" }}>
                <Slider {...settings}>
                    {Testimonials.map((items) => {
                        return (
                            <div className='grid place-content-center place-items-center w-[100%] min-h-[300px] max-[auto] rounded-sm' key={items.id}>
                                <h3 className='text-[#8b7d6b] text-6xl capitalize w-[100%] text-center' style={{ marginBottom: '1rem' }}>{items.name}</h3>
                                <p className='text-7xl md:w-[65%] w-[90%] text-center' style={{ margin: '0px auto' }}>{items.message}</p>
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