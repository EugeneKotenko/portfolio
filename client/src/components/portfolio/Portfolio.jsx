import React from "react";
import './Portfolio.scss'
import IMG1 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Smoothie bar of React</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/EugeneKotenko/final-hw2" className="btn" target="_blank">Github</a>
                        <a href="https://final-hw2.onrender.com/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio