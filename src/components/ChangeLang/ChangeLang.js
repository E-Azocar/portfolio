import React from "react";
import { Link } from "react-router-dom";

function ChangeLang({ english }) {
    if (english) {
        return (
            <>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle lang"
                        href="#"
                        id="lang-item"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="https://flagcdn.com/48x36/gb.webp"
                            />
                            <img
                                src="https://flagcdn.com/48x36/gb.png"
                                width="20"
                                height="16"
                                alt="English"
                                className="me-1"
                            />
                        </picture>
                        - En
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark fs-7 lang-drop">
                        <li>
                            <Link to="/" className="dropdown-item">
                                <picture>
                                    <source
                                        type="image/webp"
                                        srcSet="https://flagcdn.com/48x36/es.webp"
                                    />
                                    <img
                                        src="https://flagcdn.com/48x36/es.png"
                                        width="20"
                                        height="16"
                                        alt="Español"
                                        className="me-1"
                                    />
                                </picture>
                                - Español
                            </Link>
                        </li>
                        <li>
                            <Link to="/en/" className="dropdown-item">
                                <picture>
                                    <source
                                        type="image/webp"
                                        srcSet="https://flagcdn.com/48x36/gb.webp"
                                    />
                                    <img
                                        src="https://flagcdn.com/48x36/gb.png"
                                        width="20"
                                        height="16"
                                        alt="English"
                                        className="me-1"
                                    />
                                </picture>
                                - English
                            </Link>
                        </li>
                    </ul>
                </li>
            </>
        );
    } else {
        return (
            <>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle lang"
                        href="#"
                        id="lang-item"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="https://flagcdn.com/48x36/es.webp"
                            />
                            <img
                                src="https://flagcdn.com/48x36/es.png"
                                width="20"
                                height="16"
                                alt="Español"
                                className="me-1"
                            />
                        </picture>
                        - Es
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark fs-7 lang-drop">
                        <li>
                            <Link to="/" className="dropdown-item">
                                <picture>
                                    <source
                                        type="image/webp"
                                        srcSet="https://flagcdn.com/48x36/es.webp"
                                    />
                                    <img
                                        src="https://flagcdn.com/48x36/es.png"
                                        width="20"
                                        height="16"
                                        alt="Español"
                                        className="me-1"
                                    />
                                </picture>
                                - Español
                            </Link>
                        </li>
                        <li>
                            <Link to="/en/" className="dropdown-item">
                                <picture>
                                    <source
                                        type="image/webp"
                                        srcSet="https://flagcdn.com/48x36/gb.webp"
                                    />
                                    <img
                                        src="https://flagcdn.com/48x36/gb.png"
                                        width="20"
                                        height="16"
                                        alt="English"
                                        className="me-1"
                                    />
                                </picture>
                                - English
                            </Link>
                        </li>
                    </ul>
                </li>
            </>
        );
    }
}

export default ChangeLang;
