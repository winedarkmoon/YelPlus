import axios from 'axios';
export function fetchYelpData(term, location, price) {
    const params = { term, location };
    if (price) params.price = price;

    return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_PROXY_URL}/https://api.yelp.com/v3/businesses/search`,
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        },
        params,
    })
        .then(response => {
            return response.data.businesses;
        })
        .catch(error => {
            console.error('Error fetching Yelp data:', error);
            return []; // return an empty array instead of null
        });
}
