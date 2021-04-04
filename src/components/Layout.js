import { useLocation } from "react-router-dom";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
    const location = useLocation().pathname;
    const en = location === '/en' || location === '/en/' ? true : false;
    return (
        <>
            <Navbar english={en} />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
