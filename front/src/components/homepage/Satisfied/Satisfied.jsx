import React from 'react'
import './satisfied.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import './styles.css';

const Satisfied = () => {
    return (
        <section id='satisfied'>
            <div className="satisfied">
                <div className="container">
                    <div className="my_satisfied">
                        <div className="upper">
                            <p>GUESTS SAYS</p>
                            <p className='our_p'>Our Satisfied Guests says</p>
                        </div>

                        <div className="cards">


                            <Swiper pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }} slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide> <div className="card">
                                    <div className="circle"></div>
                                    <div className="card_body">
                                        <div className="stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="detail">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat eveniet cumque pariatur!</p>
                                            <span>
                                                Denis Green
                                            </span>
                                            <p>Guests from Italy</p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide> <div className="card">
                                    <div className="circle"></div>
                                    <div className="card_body">
                                        <div className="stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="detail">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat eveniet cumque pariatur!</p>
                                            <span>
                                                Denis Green
                                            </span>
                                            <p>Guests from Italy</p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide> <div className="card">
                                    <div className="circle"></div>
                                    <div className="card_body">
                                        <div className="stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="detail">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat eveniet cumque pariatur!</p>
                                            <span>
                                                Denis Green
                                            </span>
                                            <p>Guests from Italy</p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide> <div className="card">
                                    <div className="circle"></div>
                                    <div className="card_body">
                                        <div className="stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="detail">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat eveniet cumque pariatur!</p>
                                            <span>
                                                Denis Green
                                            </span>
                                            <p>Guests from Italy</p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide> <div className="card">
                                    <div className="circle"></div>
                                    <div className="card_body">
                                        <div className="stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="detail">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat eveniet cumque pariatur!</p>
                                            <span>
                                                Denis Green
                                            </span>
                                            <p>Guests from Italy</p>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                <SwiperSlide> <div className="card">
                                    <div className="circle"></div>
                                    <div className="card_body">
                                        <div className="stars">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                        <div className="detail">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat eveniet cumque pariatur!</p>
                                            <span>
                                                Denis Green
                                            </span>
                                            <p>Guests from Italy</p>
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

export default Satisfied