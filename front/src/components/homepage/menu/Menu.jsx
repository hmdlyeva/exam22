import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../../../redux/slice/slice'
import './menu.scss'
const Menu = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllData())
    }, [])


    return (
        <section id='menu_dis'>
            <div className="menu_dis">
                <div className="container">
                    <div className="my_menu">
                        <div className="upper_menu">
                            <p>Discover Our Exclusive Menu</p>
                            <div className="btns">
                                <button className='btn_one'>
                                    main
                                </button>

                                <button className='btn_two'>
                                    Dessert
                                </button>

                                <button className='btn_three'>
                                    Drinks
                                </button>
                            </div>
                        </div>
                        <div className="cards">
                            {
                                products && products.map(elem => {
                                    return <div key={elem._id} className="card">
                                        <div className="left_side">
                                            <div className="circle">
                                                <img src={elem.image} alt="" 
                                                width={100} height={100}/>
                                            </div>
                                            <div className="detail">
                                                <p>{elem.prodname}</p>
                                                <span>{elem.ingredients}</span>
                                            </div>
                                        </div>
                                        <div className="right_side">${elem.price}</div>
                                    </div>
                                })
                            }


                        </div>

                        <div className="foot_menu">
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                            <button>Make a Reservation</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu