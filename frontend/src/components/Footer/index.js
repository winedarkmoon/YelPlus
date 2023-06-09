import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const location = useLocation();

    if (location.pathname.includes("write-a-review")) {
        return null;
    } else {
        return (
            <footer>
                <div className="footerCol">
                    <div>
                        <ul className='languageLists'>
                            <h2 className="ulFooterListTitle">Backend</h2>
                            <li className='language' >Rails</li>
                            <li className='language'>Ruby</li>
                            <li className='language'>PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='languageLists'>
                            <h2 className="ulFooterListTitle">Frontend</h2>
                            <li className='language'>JavaScript</li>
                            <li className='language'>React</li>
                            <li className='language'>Redux</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='languageLists'>
                            <h2 className="ulFooterListTitle">Styling</h2>
                            <li className='language'>CSS</li>
                            <li className='language'>HTML</li>
                            <li className='language'>icons 8</li>
                            <li className='language'>Font Awesome</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='languageLists'>
                            <h2 className="ulFooterListTitle">Future Features</h2>
                            <li className='language'>AWS and Photos</li>
                            <li className='language'>User Profile</li>
                            <li className='language'>Reviews</li>
                        </ul>
                    </div>
                </div>

                <div id="copyright">
                    <p>Copyright © 2023 YelPlus and related marks are registered trademarks of YelPlus</p>
                </div>
            </footer>
        )
    }

}

export default Footer 