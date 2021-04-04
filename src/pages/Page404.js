import React from "react";
import { Link, useLocation } from "react-router-dom";

function Page404() {
    const location = useLocation().pathname;
    if (location.substr(1,3) === "en/") {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column container-404">
                <h1 className="display-1">404</h1>
                <h3>Not Found</h3>
                <Link to="/en/">Return to home</Link>
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column container-404">
                <h1 className="display-1">404</h1>
                <h3>No encontrado</h3>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }
}

export default Page404;
