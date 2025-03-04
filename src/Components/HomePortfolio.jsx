import React from 'react'

const HomePortfolio = () => {
    return (
        <div className='section-center text-center'>
            <h5 className='text-gray-400 text-center text-3xl'>Explore</h5>
            <h3 className='text-black text-4xl'>Our Latest interior Designs</h3>
            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsam.</p>
            <section className="home-portfolio-container">
                <div className='item grid-1'>
                    <img className='h-[100%] w-[100%]' src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='item grid-2'>
                    <img className='h-[100%] w-[100%]' src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='item grid-3'>
                    <img className='h-[100%] w-[100%]' src="https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='item grid-4'>
                    <img className='h-[100%] w-[100%]' src="https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='item grid-5'>
                    <img className='h-[100%] w-[100%]' src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='item grid-6'>
                    <img className='h-[100%] w-[100%]' src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </section>
        </div>
    )

}

export default HomePortfolio