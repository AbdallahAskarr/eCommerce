import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import ShowCategory from './ShowCategory'
import Register from './Register'
import Location from './Location'
import About from './About'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <ShowCategory />
            <Register />
            <Location />
            <About />
            <AppSection />
            <Sponsor/>
        </div>
    )
}

export default Home