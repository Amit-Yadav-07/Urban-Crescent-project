import React from 'react'
import Banner from './Banner'
import OurProcess from './OurProcess'
import Featured from './Featured'
import Card from './Card'
import HomeAbout from './HomeAbout'
import HomeVideo from './HomeVideo'
import BeforeAfter from './BeforeAfter'
import HomePortfolio from './HomePortfolio'
import HomeTestimonials from './HomeTestimonials'

const Home = () => {
    return (
        <div>
            <Banner />
            <Featured />
            <Card />
            <HomeAbout />
            <HomeVideo />
            <OurProcess />
            <BeforeAfter />
            <HomePortfolio />
            <HomeTestimonials />
        </div>
    )
}

export default Home