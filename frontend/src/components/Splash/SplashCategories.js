import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import example1 from '../../images/example1.jpg'
import example2 from '../../images/example2.jpg'
import example3 from '../../images/example3.jpg'
import example4 from '../../images/example4.jpg'
import './SplashCategories.css';

class SplashCategories extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCategoryClick = async (e, term) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        const location = "San Diego";
        this.props.history.push(`/search?term=${term}&location=${location}`);
    };

    render() {
        return (
            <div className="biz-footer">
                <h2 className="splash-categories-title">
                    Find the Best Restaurants in Town
                </h2>
                <div className="splash-categories-container">
                    <div
                        className="splash-categories-item"
                        onClick={(e) => this.handleCategoryClick(e, "Chinese")}
                    >
                        <div className="splash-categories-pic-container">
                            <img
                                className="splash-categories-pic"
                                src={example1}
                                alt=""
                            />
                            <p className="splash-categories-item-text">Chinese</p>
                        </div>
                    </div>
                    <div
                        className="splash-categories-item"
                        onClick={(e) => this.handleCategoryClick(e, "Italian")}
                    >
                        <div className="splash-categories-pic-container">
                            <img
                                className="splash-categories-pic"
                                src={example2}
                                alt=""
                            />
                        </div>
                        <p className="splash-categories-item-text">Italian</p>
                    </div>
                    <div
                        className="splash-categories-item"
                        onClick={(e) => this.handleCategoryClick(e, "Japanese")}>
                        <div className="splash-categories-pic-container">
                            <img
                                className="splash-categories-pic"
                                src={example3}
                                alt=""
                            />
                        </div>
                        <p className="splash-categories-item-text">Japanese</p>
                    </div>
                    <div
                        className="splash-categories-item"
                        onClick={(e) => this.handleCategoryClick(e, "Mexican")}
                    >
                        <div className="splash-categories-pic-container">
                            <img
                                className="splash-categories-pic"
                                src={example4}
                                alt=""
                            />
                        </div>
                        <p className="splash-categories-item-text">Mexican</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mSTP = (state, ownProps) => ({});
const mDTP = (dispatch) => ({});

export default withRouter(connect(mSTP, mDTP)(SplashCategories));
