
const API_URL = "https://api.punkapi.com/v2/beers";

const getBeers = (searchTerm) => {
    return fetch(`${API_URL}?beer_name=${searchTerm}`)
    .then((res) => res.json())
};


export default getBeers;