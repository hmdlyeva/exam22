import React from 'react'
import './Hero.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Hero = () => {
  return (
   <section id='hero'>
    <div className="hero">
        <div className="container">
            <div className="my_hero">
                <p>Book a table for yourself at a time convenient for you</p>
                <button>Book a table</button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero