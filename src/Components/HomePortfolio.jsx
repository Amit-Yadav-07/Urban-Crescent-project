import React from 'react'
import { HomeGallery } from './data'

const HomePortfolio = () => {
    return (
        <div className='section-center text-center'>
            <h3 className='text-gray-400 text-center text-3xl'>Explore</h3>
            <h3 className='text-black text-4xl'>Our Latest interior Designs</h3>
            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsam.</p>

            <div className="carousel carousel-center w-auto rounded-box gap-4 lg:h-[500px] h-[500px]" style={{ marginTop: '3rem' }}>
                {HomeGallery.map((items) => {
                    return (

                        <div className="carousel-item" key={items.id}>
                            <img
                                src={items.img}
                                className="rounded-box w-[100%]" loading='lazy' />
                        </div>
                    )
                })}

            </div>

            {/* <section className="flex gap-4 section-center" style={{ marginTop: '3rem' }} data-aos='fade-left'></section> */}
        </div>
    )

}

export default HomePortfolio