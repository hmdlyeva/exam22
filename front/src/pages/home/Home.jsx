import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/homepage/hero/Hero'
import Ourchef from '../../components/homepage/ourchef/Ourchef'
import Menu from '../../components/homepage/menu/Menu'
import Satisfied from '../../components/homepage/Satisfied/Satisfied'
import Blog from '../../components/homepage/blog/blog'
import Footer from '../../components/homepage/footer/Footer'
const Home = () => {
    return (
        <div>

            <Navbar />
            <Hero />
            <Ourchef />
            <Menu />
            <Satisfied />
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home