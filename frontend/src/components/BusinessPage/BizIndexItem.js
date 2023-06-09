import React from "react";
import BusinessIndexItemButton from './BizIndexItemButton';
import { BsClock } from 'react-icons/bs';
import { VisualAverageStarRating } from '../Stars';

const BusinessIndexItem = ({ business, index, handleHover }) => {
    let categoriesTitles = business.categories.map(category => category.title);
    let transactions = business.transactions && business.transactions.length > 0
        ? business.transactions.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("     ")
        : null;
    let totalReviews = business.review_count;
    let phone = business.phone;
    let fullAddress = business.location.display_address.join(", "); if (!business) {
        return <p>Loading...</p>;
    } else {
        return (
            <a href={`https://www.yelp.com/biz/${business.id}`}
                id="BizItemDivLink"
                key={business.id}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => handleHover(business.id)}
                onMouseLeave={() => handleHover(null)}
            >
                <div id='imageAndBizInfo'>
                    <img src={business.image_url} id="bizImage" alt="Business Banner" />
                    <ul id="bizListings">
                        <h2 className="bizName">
                            {index + 1}. {business.name}
                        </h2>
                        {<li id="starRatingOnBizIndexPage">
                            <VisualAverageStarRating business={business} />
                            {totalReviews ? `(${totalReviews} reviews)` : ''}
                        </li>}
                        <li>
                            {
                                business.price
                                    ? <><BusinessIndexItemButton categoriesTitles={categoriesTitles} id="cuisineFilterButton" /> • {business.price} • {fullAddress}</>
                                    : <><BusinessIndexItemButton categoriesTitles={categoriesTitles} id="cuisineFilterButton" /> • {fullAddress}</>
                            }
                        </li>
                        <li>
                            <BsClock className="clockIcon" /> {phone ? `${phone}` : ''}
                        </li>
                        <li id="indexPageBizReview">
                            {/* Placeholder text, replace with your review component */}
                            Review goes here
                        </li>
                        <li>
                            {transactions ? `${transactions}` : null}
                        </li>
                    </ul>
                </div>
            </a>
        );
    }
}
export default BusinessIndexItem;