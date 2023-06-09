import React from 'react';
import Search from '../Search'
import PersonalLinks from './PersonalLinks';
import Logo from './Logo';
import SearchSession from './SearchSession';
import { withRouter } from 'react-router-dom';

class SearchNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let position;
        let borderBottom;
        let backgroundColor;

        if (this.props.location.pathname === '/search') {
            position = 'sticky';
            backgroundColor = 'white';
        } else {
            position = 'relative';
            backgroundColor = 'transparent';
        }

        if (this.props.location.pathname === '/') {
            borderBottom = 'none';
        } else {
            borderBottom = '#e7e6e6 1px solid';
        }

        return (
            <nav id="navBar" style={{ position: position, borderBottom: borderBottom, backgroundColor: backgroundColor }}>
                <Logo />
                {<Search formType={this.props.formType}
                    fetchBusinesses={this.props.fetchBusinesses} />}
                <PersonalLinks />
                {<SearchSession />}
            </nav>
        )
    }
};

export default withRouter(SearchNav);
