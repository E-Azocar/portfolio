import React from "react";

import background from "../../video/background.mp4";
import logo from "../../images/brand.png";
import "./Main.css";

function Main({ english }) {
    return (
        <>
            <main className="main" id="home">
                <div className="main-content">
                    <img src={logo} alt="Logo" className="main-img" />
                    <h1>Emmanuel Azócar</h1>
                    <h4 className="text-center">
                        {english ? "Web Developer" : "Desarrollador Web"}
                    </h4>
                </div>
                <video autoPlay loop muted className="video-background">
                    <source src={background} type="video/mp4" />
                </video>
            </main>
        </>
    );
}

export default Main;
