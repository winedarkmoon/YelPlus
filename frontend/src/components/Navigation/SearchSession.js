import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import ProfileButton from './ProfileButton';

const SearchSession = () => {
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
    );
};

export default SearchSession;