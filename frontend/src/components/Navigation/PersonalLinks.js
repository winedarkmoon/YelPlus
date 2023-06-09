import React from "react";
import { useLocation } from "react-router-dom";


const PersonalLinks = () => {
    const location = useLocation();

    let links;
    let color;

    if (location.pathname === '/') {
        color = "white"
    } else {
        color = "black"
    };

    if ((location.pathname !== '/login') && (location.pathname !== '/signup')) {
        links = (
            <div id="personalLinksDiv">
                <span>
                    <a href="https://github.com/winedarkmoon/"
                        target="_blank"
                        rel="noreferrer">
                        <button className="personalLinks" style={{ color: color }}>GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/ibrahim-a-998a39171/"
                        target="_blank"
                        rel="noreferrer">
                        <button className="personalLinks" style={{ color: color }}>LinkedIn</button>
                    </a>
                </span>
            </div>
        )

    }

    return (
        <div>
            {links}
        </div>
    )
}


export default PersonalLinks 