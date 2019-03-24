const fetchCityRequest = () => {
    return {
        type: 'FETCH_CITY_REQUEST'
    }
}

const fetchCitySuccess = (city) => {
    return {
        type: 'FETCH_CITY_SUCCESS',
        payload: city
    }
}

const fetchCityFailure = (err) => {
    return {
        type: 'FETCH_CITY_FAILURE',
        payload: err
    }
}

const setActiveCity = (city) => {
    return {
        type: 'SET_CURRENT_CITY',
        payload: city
    }
}


export {
    fetchCityRequest,
    fetchCitySuccess,
    fetchCityFailure,
    setActiveCity
}
