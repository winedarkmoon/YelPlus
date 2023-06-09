import React, { useState } from 'react'
import { fetchYelpData } from '../../utils/api.js';

import './Filters.css';

const Filters = ({ term, location, setResults }) => {
    const [price] = useState(null);
    const priceFilters = ['$', '$$', '$$$', '$$$$'];
    let bTLR;
    let bBLR;
    let bTRR;
    let bBRR;

    const handlePriceFilter = (priceFilter) => {
        const urlParams = new URLSearchParams(window.location.search);
        const term = urlParams.get('term');
        const location = urlParams.get('location');

        const priceForApi = priceFilter.length;

        // set price in the urlParams
        urlParams.set('price', priceForApi);

        // update the URL with the new params
        window.history.pushState({}, '', window.location.pathname + '?' + urlParams.toString());
        window.scrollTo(0, 0);

        // directly pass the term, location and price as arguments
        fetchYelpData(term, location, priceForApi)
            .then(data => {
                setResults(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }
    return (
        <>
            <div id="stickyFiltersDiv">
                <div id="filterHeaderAndClearFilterDiv">
                    <h3 id="filterHeader">Filters</h3>
                    {price ?
                        <button onClick={() => handlePriceFilter(null)} id="clearFiltersButton">
                            Clear Filters
                        </button> :
                        null
                    }
                </div>

                <div id="priceButtonsListDiv">
                    {priceFilters.map((priceFilter, i) => {

                        if (i === 0) {
                            bTLR = '15px'
                            bBLR = '15px'
                            bTRR = '0px'
                            bBRR = '0px'
                        } else if (i === 3) {
                            bTLR = '0px'
                            bBLR = '0px'
                            bTRR = '15px'
                            bBRR = '15px'
                        } else {
                            bTLR = '0px'
                            bBLR = '0px'
                            bTRR = '0px'
                            bBRR = '0px'
                        }

                        return (
                            <button
                                className="priceFilterButton"
                                key={priceFilter}
                                style={{
                                    borderTopLeftRadius: bTLR,
                                    borderBottomLeftRadius: bBLR,
                                    borderTopRightRadius: bTRR,
                                    borderBottomRightRadius: bBRR
                                }}
                                onClick={() => handlePriceFilter(priceFilter)}
                            >
                                {priceFilter}
                            </button>
                        )
                    })}
                </div>
            </div>

        </>
    )

}

export default Filters;