import React from 'react'
import { PortfolioSection } from './data'
import SubHeading from './SubHeading'

const Portfolio = () => {
    return (
        <>
            <SubHeading text='Our Portfolio' />
            <section className='section-center' style={{ margin: '0rem auto 3rem auto' }}>
                <div className="columns-1 md:columns-2 xl:columns-3 gap-5">

                    {PortfolioSection.map((items) => {
                        return (
                            <figure className="" style={{ marginBottom: '1.6rem' }} key={items.id}>
                                <img className="h-auto max-w-full rounded-lg" src={items.image} alt="Gallery-image" loading='lazy' />
                            </figure>
                        )
                    })}


                </div>
            </section>
        </>
    )
}

export default Portfolio