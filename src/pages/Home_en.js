import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import Project from "../components/Project/Project";

import "./styles.css";
import me from '../images/me.jpeg';
import chatApp from "../images/chat-app.jpg";

function Home() {
    return (
        <Layout>
            <Main english={true} />
            <div className="container">
                <section className="mt-large" id="about">
                    <div className="row">
                        <h2 className="display-6 text-center mb-5">About Me</h2>
                        <div className="col-md-5">
                            <img
                                src={me}
                                alt="Emmanuel Azócar"
                                className="img-fluid"
                            />
                            <p className="fs-medium mt-3 text-justify">
                            My name is Emmanuel Azócar, I have been a web developer since 2020 and I work in the Frontend and Backend areas. I am a young entrepreneur and I really like what I do. I would like to continue learning more about programming and software development. Despite my young age, my aspirations are clear, and I want to become a great developer to be able to create solutions to the problems that come my way.
                            </p>
                        </div>
                        <div className="col-md-7 skills-div">
                            <h3 className="fw-bold mt-5-md">
                                Frontend Development:
                            </h3>
                            <ul className="list-unstyled fs-4">
                                <li>HTML</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "85%" }}
                                        aria-valuenow="85"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        85%
                                    </div>
                                </div>
                                <li>CSS</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        75%
                                    </div>
                                </div>
                                <li>SCSS (Sass)</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        50%
                                    </div>
                                </div>
                                <li>Bootstrap 5</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow="60"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        60%
                                    </div>
                                </div>
                                <li>Javascript</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow="80"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        80%
                                    </div>
                                </div>
                                <li>React</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow="55"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        55%
                                    </div>
                                </div>
                                <li>Svelte</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        50%
                                    </div>
                                </div>
                            </ul>
                            <h3 className="mt-3 fw-bold">
                                Backend Development:
                            </h3>
                            <ul className="list-unstyled fs-4">
                                <li>Node.js</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow="70"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        70%
                                    </div>
                                </div>
                                <li>Express</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        75%
                                    </div>
                                </div>
                                <li>MongoDB</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow="60"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        60%
                                    </div>
                                </div>
                                <li>MySQL</li>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        50%
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="portfolio" className="mt-large">
                    <h2 className="display-6 text-center mb-4">Portfolio</h2>

                    <div className="row">
                        <Project
                            link="https://github.com/E-Azocar/chat-app"
                            english={true}
                            img={chatApp}
                            title="Chat App"
                            techs={['Svelte','Node.js','Express']}
                        />
                    </div>
                </section>
                <section id="contact" className="mt-large">
                    <div className="card col-md-6 mx-auto mt-3">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-4">Contact Form</h3>
                            <hr />
                            <ContactForm english={true} />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;
