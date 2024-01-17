import React from 'react'
import './detail.scss'
import Navbar from '../navbar/Navbar'
const Detail = () => {
    return (
        <section id='detail'>
            <Navbar/>
            <div className="detail">
                <div className="container">
                    <div className="my_detail">


                        <div className="card">
                            <div className="left_side">
                                <div className="circle"></div>
                                <div className="detail">
                                    <p>Grilled Beef with potatoes</p>
                                    <span>Meat, Potatoes, Rice, Tomatoe</span>
                                </div>
                            </div>
                            <div className="right_side">$29</div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail