
import React, { useEffect } from 'react'
import { PortfolioSection } from './data'
import SubHeading from './SubHeading'
import AOS from "aos";
import "aos/dist/aos.css";

const Studio = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
        });
    }, []);

    return (

        <>
            <SubHeading text='Our Studio' />
            <section className='section-center' style={{ margin: '0rem auto 3rem auto' }}>

                <div className="columns-1 md:columns-2 xl:columns-3 gap-5">

                    {PortfolioSection.map((items) => {
                        return (
                            <figure className="overflow-hidden rounded-md" style={{ marginBottom: '1.6rem' }} key={items.id} data-aos='fade-left'>
                                <img className="h-auto max-w-full rounded-md test" src={items.image} alt="Gallery-image" loading='lazy' />
                            </figure>
                        )
                    })}
                </div>

                {/* ----------------------second section---------------------------------- */}

                <SubHeading text='some heading' />
                <div className="columns-1 md:columns-2 xl:columns-3 gap-5">

                    {PortfolioSection.map((items) => {
                        return (
                            <figure className="overflow-hidden rounded-md" style={{ marginBottom: '1.6rem' }} key={items.id} data-aos="fade-right">
                                <img className="h-auto max-w-full rounded-md test" src={items.image} alt="Gallery-image" loading='lazy' />
                            </figure>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default Studio