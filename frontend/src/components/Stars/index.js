import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import './Stars.css';

export const VisualAverageStarRating = ({ business }) => {
    const rating = Math.floor(business.rating);

    switch (rating) {
        case 1:
            return <>
                <BsStarFill className="yellowStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
        case 2:
            return <>
                <BsStarFill className="orangeStars" />
                <BsStarFill className="orangeStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
        case 3:
            return <>
                <BsStarFill className="darkOrangeStars" />
                <BsStarFill className="darkOrangeStars" />
                <BsStarFill className="darkOrangeStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
        case 4:
            return <>
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="greyStars" />
            </>
        case 5:
            return <>
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
            </>
        default:
            return <>
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
    };
};



export const VisualSingleReviewStarRating = ({ review }) => {
    const rating = review.starRating;

    switch (rating) {
        case 1:
            return <>
                <BsStarFill className="yellowStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
        case 2:
            return <>
                <BsStarFill className="orangeStars" />
                <BsStarFill className="orangeStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
        case 3:
            return <>
                <BsStarFill className="darkOrangeStars" />
                <BsStarFill className="darkOrangeStars" />
                <BsStarFill className="darkOrangeStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
        case 4:
            return <>
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="orangeRedStars" />
                <BsStarFill className="greyStars" />
            </>
        case 5:
            return <>
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
                <BsStarFill className="redStars" />
            </>
        default:
            return <>
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
                <BsStarFill className="greyStars" />
            </>
    };
};