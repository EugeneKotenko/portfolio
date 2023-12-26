import React from "react";
import "./About.scss";
import ME from "../../assets/me.png";
import CV from "../../assets/cv.pdf";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiSolidFolderOpen } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2 Worlwide</small>
            </article>
            <article className="about__card">
              <BiSolidFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>45+ Completed</small>
            </article>
          </div>
          <p>
            Interested in software development and have knowledge in the field of web application development. I have experience in creating interactive web pages and applications, as well as using modern technologies and development practices.
          </p>
          <div className="cta">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let`s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
