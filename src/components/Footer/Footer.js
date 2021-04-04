import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center footer-gray text-white mt-medium">
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Twitter */}
                    <a
                        className="btn btn-link btn-floating btn-lg m-1"
                        href="https://twitter.com/EmmanuelAzocar"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter />
                    </a>
                    {/* Github */}
                    <a
                        className="btn btn-link btn-floating btn-lg m-1"
                        href="https://github.com/E-Azocar"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                </section>
                {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3 copy-section">
                © {year} Copyright: Emmanuel Azócar
            </div>
            {/* Copyright */}
        </footer>
    );
}

export default Footer;
