import React from 'react'

const Card = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 section-center'>
                <figure className='flex-1'>
                    <img className='h-[500px] w-[100%] rounded-2xl' src="https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </figure>

                <figure className='flex-1' style={{ marginTop: '1.6rem' }}>
                    <img className='h-[500px] w-[100%] rounded-2xl' src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </figure>
            </div>

            <div className='flex flex-col md:flex-row gap-4 section-center'>
                <figure className='flex-1'>
                    <img className='h-[500px] w-[100%] rounded-2xl' src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </figure>

                <figure className='flex-1' style={{ marginTop: '1.6rem' }}>
                    <img className='h-[500px] w-[100%] rounded-2xl' src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </figure>
            </div>

        </>

    )
}

export default Card