import React from 'react';

const BusinessIndexItemButton = ({ categoriesTitles }) => {
    return (
        <>
            {categoriesTitles.length
                ? categoriesTitles.slice(0, 1).map((title, index) => (
                    <span id="cuisineFilterButton"
                        key={index}
                    >
                        {title}
                    </span>
                ))
                : "N/A"}
        </>
    );
};


export default BusinessIndexItemButton;