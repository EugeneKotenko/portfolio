import React from "react";
import "./Experience.scss";
import { BsCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Knowledge of JavaScript and ES6+</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Knowledge of NEXT.JS</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Interaction with Git and GitHub</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Working with HTML and CSS</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Knowledge of React and Redux</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Interaction with the REST API</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Knowledge of TypeScript</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Code testing</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Working with the DOM</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Work with forms</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Use of WebStorages</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Regular expressions</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Working with libraries and frameworks</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Understanding asynchronous code</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>OOP and working with objects</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Using Design Libraries</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="expirience__head">Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Working with servers (Node.js)</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Using code collection systems</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Understanding of server-side architecture</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
