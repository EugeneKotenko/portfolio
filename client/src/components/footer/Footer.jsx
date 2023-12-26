import React from "react";
import './Footer.scss';
import { SiFreelancer } from 'react-icons/si';
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Yevhenii Kotenko</a>

            <ul className="permalinks">
                <li> <a href="#">Home</a></li>
                <li> <a href="#experience">Experience</a></li>
                <li> <a href="#portfolio">Portfolio</a></li>
                <li> <a href="#testimonials">Testimonials</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/yevhenii-kotenko/"><FaLinkedinIn /></a>
                <a href="https://freelancehunt.com/freelancer/Eugene_Kotenko.html"><SiFreelancer /></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy;2023 All rights reserved. Developed by Yevhenii Kotenko.
                </small>
            </div>
        </footer>
    )
}

export default Footer