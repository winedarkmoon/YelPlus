import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchYelpData } from '../../utils/api.js';
import SearchNav from '../Navigation/SearchNavigation.js'
import Filters from "./Filters"
import BusinessIndexItem from "./BizIndexItem"

import MapBox from "../Map/";
import './BusinessPage.css';

function SearchIndex() {
    const [results, setResults] = useState([]);
    const [price] = useState('');
    const [hoveredItem, setHoveredItem] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const term = params.get('term');
    const loc = params.get('location');

    useEffect(() => {
        fetchData(term, loc, price);
    }, [location, price]);

    const fetchData = (term, location, price) => {
        fetchYelpData(term, location, price)
            .then(data => {
                setResults(data);
            });
    };

    const handleHover = id => {
        setHoveredItem(id);
    };

    return (
        <div id="bizIndexPageWrapper">
            { <SearchNav fetchBusinesses={fetchData} /> }
            <div id="mainContent">
                {<div id="filtersSideBar" className="bizIdxColumn">
                    <Filters fetchYelpData={fetchYelpData} term={term} location={location} setResults={setResults}/>
                </div>
                }
                <div id="indexListingsDiv">
                    {results.map((business, index) => (
                        <BusinessIndexItem
                            key={business.id}
                            business={business}
                            index={index}
                            handleHover={handleHover}
                        />
                    ))}
                </div>

                <div id="mapDiv" className="bizIdxColumn">
                    <div className="sticky">
                        <MapBox businesses={results} coordinates={results[0]?.coordinates} hoveredItem={hoveredItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchIndex;

