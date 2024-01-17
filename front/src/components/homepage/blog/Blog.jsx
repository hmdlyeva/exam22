import React from 'react'
import './Blog.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Blog = () => {
    return (
        <section id='blog'>
            <div className="blog">
                <div className="container">
                    <div className="my_blog">
                        <div className="upper">
                            <p>BLOG</p>
                            <p className='p_one'>Recent Blog</p>
                        </div>


                        <div className="cards">
                        <Swiper pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }} slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image">
                                        </div>
                                        <div className="detail">
                                            <div className="pp">
                                                <p className='one'>July,7, 2018</p>
                                                <p className='two'>Admin</p>
                                            </div>
                                            <p className='three'>Even the all-powerfull Pointing has no control about the blind texts</p>
                                            <div className="foot">
                                                <p>Read more</p>
                                                <div className="icon">
                                                    <p>3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image">
                                        </div>
                                        <div className="detail">
                                            <div className="pp">
                                                <p className='one'>July,7, 2018</p>
                                                <p className='two'>Admin</p>
                                            </div>
                                            <p className='three'>Even the all-powerfull Pointing has no control about the blind texts</p>
                                            <div className="foot">
                                                <p>Read more</p>
                                                <div className="icon">
                                                    <p>3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image">
                                        </div>
                                        <div className="detail">
                                            <div className="pp">
                                                <p className='one'>July,7, 2018</p>
                                                <p className='two'>Admin</p>
                                            </div>
                                            <p className='three'>Even the all-powerfull Pointing has no control about the blind texts</p>
                                            <div className="foot">
                                                <p>Read more</p>
                                                <div className="icon">
                                                    <p>3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image">
                                        </div>
                                        <div className="detail">
                                            <div className="pp">
                                                <p className='one'>July,7, 2018</p>
                                                <p className='two'>Admin</p>
                                            </div>
                                            <p className='three'>Even the all-powerfull Pointing has no control about the blind texts</p>
                                            <div className="foot">
                                                <p>Read more</p>
                                                <div className="icon">
                                                    <p>3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image">
                                        </div>
                                        <div className="detail">
                                            <div className="pp">
                                                <p className='one'>July,7, 2018</p>
                                                <p className='two'>Admin</p>
                                            </div>
                                            <p className='three'>Even the all-powerfull Pointing has no control about the blind texts</p>
                                            <div className="foot">
                                                <p>Read more</p>
                                                <div className="icon">
                                                    <p>3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image">
                                        </div>
                                        <div className="detail">
                                            <div className="pp">
                                                <p className='one'>July,7, 2018</p>
                                                <p className='two'>Admin</p>
                                            </div>
                                            <p className='three'>Even the all-powerfull Pointing has no control about the blind texts</p>
                                            <div className="foot">
                                                <p>Read more</p>
                                                <div className="icon">
                                                    <p>3</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                        </Swiper>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog