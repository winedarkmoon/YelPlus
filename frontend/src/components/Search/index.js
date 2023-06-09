import React from "react";
import { withRouter } from "react-router-dom";
import { fetchYelpData } from '../../utils/api.js';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            location: "",
            businesses: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    async handleSubmit(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        const businesses = await fetchYelpData(this.state.term, this.state.location);
        this.setState({ businesses });
        this.props.history.push(
            `/search?term=${this.state.term}&location=${this.state.location}`
        );
    }

    render() {
        let searchBarShadow;
        searchBarShadow = "0px 0px 20px 0px rgb(195, 193, 193)"
        const pageId = this.props.location.pathname === "/" ? "searchBarDivSplash" : "searchBarDiv";
        return (
            <>
                <div id={pageId}>
                    <form
                        className="searchBarForm"
                        onSubmit={this.handleSubmit}
                        autoComplete="off"
                        style={{ boxShadow: searchBarShadow }}
                    >
                        <input
                            onChange={this.handleInput("term")}
                            type="text"
                            name="query"
                            value={this.state.query}
                            id="searchBarTerm"
                            className="searchInput"
                            placeholder="tacos, cheap dinner, Max's"
                        />
                        <input
                            id="searchBarLocation"
                            className="searchInput"
                            type="text"
                            placeholder="San Diego, CA"
                            onChange={this.handleInput("location")}
                        />
                        <button id="searchButton" type="submit" value="submit">
                            <HiOutlineMagnifyingGlass alt="Magnifying glass" id="magGlass" />
                        </button>

                    </form>
                </div>
            </>
        );
    }
}

export default withRouter(Search);