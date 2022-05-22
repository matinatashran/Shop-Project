import axios from 'axios';

const BASE_URL = "https://fakestoreapi.com";

const fetchRequest = () => {
    return { type: "REQUEST" };
}

const fetchSuccessAll = (products) => {
    return { type: "SUCCESS_ALL", payload: products };
}

const fetchSuccessSpecial = (products) => {
    return { type: "SUCCESS_SPECIAL", payload: products };
}

const fetchFailure = (error) => {
    return { type: "FAILURE", payload: error };
}

const fetchAPI = (type) => {
    let url = "";
    if (type === "ALL")
        url = `${BASE_URL}/products`;
    
    else if (type === "SPECIAL")
        url = `${BASE_URL}/products?limit=4`;
    
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get(url)
            .then(response => dispatch(
                type === "ALL" ? fetchSuccessAll(response.data) : fetchSuccessSpecial(response.data)
            ))
            .catch(error => dispatch(fetchFailure(error.message)))
    }
}

export default fetchAPI;