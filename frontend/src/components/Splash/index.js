import React from "react";
import SplashNavigation from "../Navigation/SplashNavigation"
import SplashCategories from "../Splash/SplashCategories";
import Search from "../Search/"
import logo_white from '../../images/logoWhite.png'; // Add this line
import background1 from '../../images/background1.jpg';
import background2 from '../../images/background2.jpg';
import background3 from '../../images/background3.jpg';
import background4 from '../../images/background4.jpg';
import { fetchYelpData } from '../../utils/api.js';
import './Splash.css';

const images = [background1, background2, background3, background4];
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: images[Math.floor(Math.random() * images.length)]
    };
  }
  handleCategoryClick = async (e, term) => {
    e.preventDefault();
    const location = "San Diego";
    fetchYelpData(term, location);
    this.props.history.push(`/search?term=${term}&location=${location}`);
  };
  render() {
    const { bgImage } = this.state;
    const bgStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
    return (
      <>
        <div className="splash-container-main-background" style={bgStyle}>
          <div className="splash-container-main">
          <SplashNavigation />

            <div className="splash-container-inner">
              <h1 className="splash-logo-container">
                <a href="/">    <img src={logo_white} alt="Logo" /></a>
              </h1>
              <Search
                formType={this.props.formType}
                fetchBusinesses={this.props.fetchBusinesses}
              />
              <ul className="search-categories">
                <li className="search-featured">
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      style={{ color: "white", fill: "currentcolor" }}
                    >
                      <path d="M17.87 15.64a1 1 0 011.58 0c.55.7 2.33 3.09 2.33 4.5a3.12 3.12 0 11-6.24 0c0-1.41 1.79-3.8 2.33-4.5zm.79 5.61c.6 0 1.093-.471 1.12-1.07A7 7 0 0018.66 18a7 7 0 00-1.12 2.14 1.12 1.12 0 001.12 1.11zM17 5a6 6 0 016 6v3a1 1 0 01-1 1h-7a1 1 0 01-1-1v-1h-1.28A2 2 0 0111 14H7a2 2 0 01-1.72-1H2a1 1 0 01-1-1V6a1 1 0 011-1h3.28A2 2 0 017 4h1V3H6a1 1 0 010-2h6a1 1 0 110 2h-2v1h1a2 2 0 011.72 1H17zM3 7v4h2V7H3zm4 5h4V6H7v6zm14 1v-2a4 4 0 00-4-4h-4v4h2a1 1 0 011 1v1h5z"></path>
                    </svg>
                  </span>
                  <span href="#" onClick={(e) => this.handleCategoryClick(e, "Plumbers")}>Plumbers</span>
                </li>
                <li className="search-featured">
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      style={{ color: "white", fill: "currentcolor" }}
                    >
                      <path d="M17 1a4 4 0 014 4v4a6 6 0 01-2 4.46V20a3 3 0 11-6 0V5a4 4 0 014-4zm0 19v-5.35a6 6 0 01-2 .35v5a1 1 0 102 0zm2-11V5a2 2 0 00-4 0v8a4 4 0 004-4zm-9-8a1 1 0 011 1v5a4 4 0 01-1 2.62V20a3 3 0 11-6 0V9.62A4 4 0 013 7V2a1 1 0 012 0v3h1V2a1 1 0 012 0v3h1V2a1 1 0 011-1zM9 7H5a2 2 0 104 0zM7 21a1 1 0 001-1v-9.14A4.09 4.09 0 017 11a4.09 4.09 0 01-1-.14V20a1 1 0 001 1z"></path>
                    </svg>
                  </span>
                  <span href="#" onClick={(e) => this.handleCategoryClick(e, "Restaurants")}>Restaurants</span>
                </li>

                <li className="search-featured">
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      style={{ color: "white", fill: "currentcolor" }}
                    >
                      <path d="M8.672 14.524a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916z"></path>
                      <path d="M22 21h-3.29v-3.046a5.929 5.929 0 004.236-5.97c0-4.882-4.268-10.361-4.45-10.591a1 1 0 00-1.572-.001c-.16.202-3.454 4.43-4.27 8.757L9.06 7.721a1 1 0 00-1.12 0l-6.588 4.45a1 1 0 00-.27 1.39.99.99 0 00.918.42V21a1 1 0 100 2h20a1 1 0 000-2zM17.71 3.73c1.17 1.74 3.236 5.239 3.236 8.253 0 2.253-1.452 4.085-3.236 4.085A3.165 3.165 0 0115 14.2v-.211c.03.003.058.013.088.013a1 1 0 00.56-1.83l-1.13-.763c.232-2.874 2.094-6.046 3.192-7.678zM9 21H8v-3h1v3zm4 0h-2v-4a1 1 0 00-1-1H7a.998.998 0 00-1 1v4H4v-8.203l4.5-3.04 4.5 3.04V21zm2-3.825a4.885 4.885 0 001.71.768V21H15v-3.825z"></path>
                    </svg>
                  </span>
                  <span href="#" onClick={(e) => this.handleCategoryClick(e, "Home Services")}>Home Services</span>
                </li>
                <li className="search-featured">
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      style={{ color: "white", fill: "currentcolor" }}
                    >
                      <path d="M23.596 17a4.97 4.97 0 00-1.836-3.839L17.753 4.77a1.114 1.114 0 00-.464-.53.983.983 0 00-.432-.124c-.013 0-.023-.008-.036-.008h-4.843a1 1 0 000 2h1.656a3.534 3.534 0 00-.09 3.006l1.817 4.107A5.018 5.018 0 0013.703 16H9.748a2.537 2.537 0 01-1.488-2.107c0-1.486 1.971-1.895 2.05-1.91a1 1 0 00.815-.983V9a.998.998 0 00-1-1h-2.03V5a3.003 3.003 0 00-3-3H1.38a1 1 0 00-1 1v8a1 1 0 001 1h.28a6.56 6.56 0 00-1.115 5.203.99.99 0 00.807.77c0 .01-.005.017-.005.027a4.056 4.056 0 108.11 0h5.06a4.055 4.055 0 108.109 0l-.001-.006a.996.996 0 00.97-.994zM9.125 10v.249a3.987 3.987 0 00-2.865 3.644A3.909 3.909 0 006.86 16H2.405a4.571 4.571 0 011.621-3.646 1 1 0 00-.079-1.587L2.832 10h6.293zM2.38 4h2.715a1 1 0 011 1v3H2.832c-.153.007-.305.03-.452.072V4zM5.4 20.056A2.058 2.058 0 013.347 18h4.11a2.058 2.058 0 01-2.056 2.056zM21.425 16h-5.658a3.001 3.001 0 015.658 0zm-5.93-9.182c.175-.273.431-.484.732-.603l2.783 5.827c-.14-.012-.272-.042-.414-.042-.502.007-1 .09-1.477.248l-1.744-3.943a1.54 1.54 0 01.12-1.487zm3.076 13.238A2.058 2.058 0 0116.517 18h4.109a2.058 2.058 0 01-2.055 2.056z"></path>
                    </svg>
                  </span>
                  <span href="#" onClick={(e) => this.handleCategoryClick(e, "Delivery")}>Delivery</span>
                </li>
                <li className="search-featured">
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      style={{ color: "white", fill: "currentcolor" }}
                    >
                      <path d="M18.055 12.874a1.987 1.987 0 01-1.165.26 3.71 3.71 0 01-1.213-.544l.705 1.41H3.618l1-2h10.174a15.653 15.653 0 01-2.229-2H5V8h6.057a8.353 8.353 0 01-.89-2H4a1 1 0 00-1 1v3.764l-1.895 3.789A1 1 0 002 16h1v6a1 1 0 001 1h12a.998.998 0 001-1v-6h1a1.001 1.001 0 00.895-1.447l-.84-1.679zM11 21H9v-2h2v2zm4 0h-2v-3a1 1 0 00-1-1H8a.998.998 0 00-1 1v3H5v-5h10v5z"></path>
                      <path d="M19.9 1.03a3.625 3.625 0 00-2.582 1.37 3.625 3.625 0 00-2.58-1.37 3.091 3.091 0 00-3.092 3.293c0 3.892 5.183 6.83 5.404 6.953a.5.5 0 00.244.064c.423 0 5.696-3.196 5.696-7.017A3.092 3.092 0 0019.9 1.03z"></path>
                    </svg>
                  </span>
                  <span href="#" onClick={(e) => this.handleCategoryClick(e, "Black Owned")}>Black Owned</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="splash-categories-container">
          <SplashCategories fetchBusinesses={this.props.fetchBusinesses} history={this.props.history} />
        </div>
      </>
    );
  }
}

export default Splash;
