import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Logo = () => {
    return (
        <div className="logoDiv">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" /></Link>
        </div>
    )
};

export default Logo;
