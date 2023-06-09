import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import linkedin from '../../images/icons8-linkedin-32.png';
import github from '../../images/icons8-github-24.png';
import signup_image from '../../images/signup_illustration.png'
import './SignupForm.css'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        dispatch(sessionActions.signup({
            username,
            email,
            password,
        }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
        return setErrors(['Invalid information provided. Try again.']);
    };


    const demoUserLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({
            credential: 'demo@user.io',
            password: 'password'
        }))
        scrollToTop();
    };


    return (

        <>
            <ul>
                {errors.map(error => <li id="errorsLi" key={error}>{error}</li>)}
            </ul>

            <div id="formAndImageWrapperSignUp" >

                <div id="signupPageWrapper">
                    <header id="signupHeaderDiv">
                        <h2 id="signupHeader">Sign Up for YelPlus</h2>
                        <span id="signUpDivTop">
                            <p>Connect with great local businesses</p>
                        </span>
                        <span>
                            <p id="termsAndConditions">By continuing, you agree to YelPlus's
                                <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/" className="externalsignupFormLinks"> Terms of Service</a> and
                                acknowledge YelPlus's
                                <a href="https://terms.yelp.com/privacy/en_us/20220831_en_us/"
                                    className="externalsignupFormLinks"> Privacy Policy</a>.
                            </p>
                        </span>
                    </header>

                    <div>
                        <a href="https://www.linkedin.com/in/ibrahim-a-998a39171/"
                            target="_blank" rel="noreferrer">
                            <button
                                id="linkedInButton"
                                className="signupFormButtons">
                                <img src={linkedin} alt="LinkedIn logo" id="linkedinLogo" />
                                <p>Follow Me on LinkedIn</p>
                            </button>
                        </a>
                        <a href="https://github.com/winedarkmoon"
                            target="_blank" rel="noreferrer">
                            <button
                                id="githubButton"
                                className="signupFormButtons">
                                <img src={github} alt="Github Logo" id="githubLogo" />
                                <p>Follow Me on GitHub</p>
                            </button>
                        </a>

                        <p id="reassuranceStatement">Want to sign in quickly? Try signing in as Demo User!</p>
                    </div>

                    <form onSubmit={handleSubmit} id="signupForm">

                        <div id="nameDiv">
                            <label htmlFor="Username">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    id="username"
                                    className="signupInput"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <label htmlFor="Email">
                            <input
                                type="text"
                                placeholder='Email'
                                id="signupInputEmail"
                                className="signupInput"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label htmlFor="Password">
                            <input
                                type="password"
                                placeholder="Password"
                                id="signupInputPassword"
                                className="signupInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <label htmlFor="Confirm Password">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                id="signupConfirmPassword"
                                className="signupInput"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button
                            id="submitFormButton"
                            className="signupFormButtons"
                            onClick={scrollToTop}
                            type="submit">Sign Up
                        </button>

                        <p id="signUpLinkBottom">Already on YelPlus?</p>

                        <button
                            id="demoUserSubmitFormButton"
                            className="signupFormButtons"
                            onClick={demoUserLogin}
                            type="submit">Sign In as Demo User
                        </button>
                    </form>


                </div>

                <div id="imageWrapper">
                    <img src={signup_image}
                        alt="Cartoon art of restaurant entry-way"
                        id="signupImage" />
                </div>

            </div>
        </>
    )

}



export default SignupFormPage