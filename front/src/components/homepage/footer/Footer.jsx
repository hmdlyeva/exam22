import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <section id='footer'>
            <div className="footer">
                <div className="container">
                    <div className="my_footer">
                        <div className="one">
                            <h1>Tasty</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="icons">
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                        <div className="two">
                            <h1>Opening Hours</h1>
                            <ul>
                                <li><span>Monday</span>: 08: - 22:00</li>
                                <li><span>Tuesday</span>: 08: - 22:00</li>
                                <li><span>Wednesday</span>: 08: - 22:00</li>
                                <li><span>Thursday</span>: 08: - 22:00</li>
                                <li><span>Friday</span>: 08: - 22:00</li>
                                <li><span>Saturday</span>: 08: - 22:00</li>
                                <li><span>Sunday</span>: 08: - 22:00</li>
                            </ul>
                        </div>
                        <div className="three">
                            <h1>Contact Information</h1>

                            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            <p>info@yoursite.com</p>
                            <p>email@email.com</p>
                        </div>
                        <div className="four">
                            <h1>Newsletter</h1>

                            <p>Far far away, behind the word mountains, far from the countries.</p>
                            <input type="text" name="" id="" placeholder='Subscribe' />
                        </div>
                    </div>

                    <div className="last_foot">
                        <p>Copyright ©2024 All rights reserved | This template is made with ❤ by Colorlib</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer