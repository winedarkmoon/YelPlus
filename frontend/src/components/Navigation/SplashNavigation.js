import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import ProfileButton from './ProfileButton';

const SplashNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
            </>
        );
    }
    return (
        <header className="splash-header">
            <div className="left-splash-header-nav">
                <ul className="left-splash-header-elements">
                    <li id="write-review" className="header-nav_item">
                        <span className="header-nav_link">Write a Review</span>
                    </li>
                    <li id="events" className="header-nav_item">
                        <span className="header-nav_link">Events</span>
                    </li>
                    <li id="talk" className="header-nav_item">
                        <span className="header-nav_link">Talk</span>
                    </li>
                    <li id="biz" className="header-nav_item">
                        <span className="header-nav_link">Yelp for Business</span>
                    </li>
                </ul>
            </div>
            <div className="right-splash-header-nav">
                <ul className="not-logged-in">
                    <li className="not-logged-in-login">
                        {sessionLinks}
                    </li>
                    {!sessionUser &&
                        <li className='not-logged-in-signup'>
                            <Link to="/signup" className="signup-link">Sign Up</Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default SplashNavigation;