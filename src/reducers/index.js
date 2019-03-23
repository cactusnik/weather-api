const initialState = {
    cities: [],
    currentCityName: null,
    lastCities: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITY_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_CITY_SUCCESS':
            return {
                ...state,
                cities: [
                    ...state.cities,
                    action.payload
                ],
                currentCityName: action.payload.name,
                loading: false,
                error: null
            }
        case 'FETCH_CITY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer
