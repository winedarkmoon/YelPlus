import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SplashNavigation from './SplashNavigation';
import './Navigation.css';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    if (location.pathname === '/') {
        return <SplashNavigation />;
    } else {
        return (
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    {sessionLinks}
                </li>
            </ul>
        );
    }
}


export default Navigation;