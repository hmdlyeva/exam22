import React from 'react'
import './Navbar.scss'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <section id='navbar'>
            <div className="navbar">
                <div className="container">
                    <div className="my_navbar">
                        <div className="left_side">
                            <button>Tasty</button>
                        </div>
                        <div className="right_side">
                            <ul>
                                <li onClick={() => {
                                    navigate("/");
                                }}>Home</li>
                                 <li onClick={() => {
                                    navigate("/add");
                                }}>Add</li>
                                <li onClick={() => {
                                    navigate("/menu");
                                }}
                                >Menu</li>
                                <li onClick={() => {
                                    navigate("/special");
                                }}>Specialities</li>
                                <li onClick={() => {
                                    navigate("/reservation");
                                }}>Reservation</li>
                                <li onClick={() => {
                                    navigate("/blog");
                                }}>Blog</li>
                                <li onClick={() => {
                                    navigate("/about");
                                }}>About</li>
                                <li onClick={() => {
                                    navigate("/contact");
                                }}>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar