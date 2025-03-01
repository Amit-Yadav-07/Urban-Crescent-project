import React from 'react'
import Banner from './Banner'
import OurProcess from './OurProcess'
import Featured from './Featured'
import Card from './Card'
import HomeAbout from './HomeAbout'

const Home = () => {
    return (
        <div>
            <Banner />
            <Featured />
            <Card />
            <HomeAbout />
            <OurProcess />
        </div>
    )
}

export default Home