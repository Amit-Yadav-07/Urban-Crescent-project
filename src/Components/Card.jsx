import React from 'react'
import { imgGrid } from './data'

const Card = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 section-center'>
                {
                    imgGrid.map((item) => {
                        return (
                            <figure className='container' key={item.id}>
                                <img className='h-[450px] w-[100%] md:object-cover object-fill' src={item.img} alt="images" loading='lazy' />
                                <div className="overlay">
                                    <div className="text">{item.text}</div>
                                </div>
                            </figure>
                        )
                    })
                }
            </div>

        </>

    )
}

export default Card