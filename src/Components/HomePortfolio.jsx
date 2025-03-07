import React from 'react'
import { HomeGallery } from './data'

const HomePortfolio = () => {
    return (
        <div className='section-center text-center'>
            <h5 className='text-gray-400 text-center text-3xl'>Explore</h5>
            <h3 className='text-black text-4xl'>Our Latest interior Designs</h3>
            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsam.</p>

            <section className="flex gap-4" style={{ marginTop: '3rem' }}>
                <div className="carousel carousel-center rounded-box max-w-[100%] gap-4 h-[550px]">
                    {HomeGallery.map((items) => {
                        return (
                            <div className="carousel-item" key={items.id}>
                                <img
                                    src={items.img}
                                    className="rounded-box w-[400px]" loading='lazy' />
                            </div>
                        )
                    })}

                </div>


                {/* <div className="flex-1 bg-amber-700">rtg</div> */}
            </section>
        </div>
    )

}

export default HomePortfolio