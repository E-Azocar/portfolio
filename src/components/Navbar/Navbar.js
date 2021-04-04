import React, { useState, useEffect } from "react";
import { Link as LinkS } from "react-scroll";

import ImgBrand from "../../images/brand.png";

import "./Navbar.css";
import ChangeLang from "../ChangeLang/ChangeLang";

function Navbar({ english }) {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
    }, []);

    window.addEventListener("scroll", changeBackground);

    const navClassName = navbar
        ? "navbar navbar-expand-lg navbar-dark nav-grey fixed-top active"
        : "navbar navbar-expand-lg navbar-dark nav-grey fixed-top";

    return (
        <>
            <nav className={navClassName}>
                <div className="container">
                    <LinkS
                        className="navbar-brand"
                        to="home"
                        duration={500}
                        smooth={true}
                    >
                        <img src={ImgBrand} alt="" width="60" height="60" />
                    </LinkS>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <LinkS
                                    to="home"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    activeclassname="active"
                                >
                                    {english ? "Home" : "Inicio"}
                                </LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS
                                    to="about"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-120}
                                    activeclassname="active"
                                >
                                    {english ? "About Me" : "Sobre Mi"}
                                </LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS
                                    to="portfolio"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-120}
                                    activeclassname="active"
                                >
                                    {english ? "Portfolio" : "Portafolio"}
                                </LinkS>
                            </li>
                            <li className="nav-item">
                                <LinkS
                                    to="contact"
                                    className="nav-link"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-120}
                                    activeclassname="active"
                                >
                                    {english ? "Contact" : "Contacto"}
                                </LinkS>
                            </li>
                            <ChangeLang english={english} />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
