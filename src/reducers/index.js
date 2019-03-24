const initialState = {
    cities: [],
    currentCityName: null,
    lastCities: [],
    loading: false,
    error: null
}

const updateLastCities = (list, city) => {
    const itemIndex = list.findIndex((item) => {
        return item === city
    })

    if (itemIndex !== -1) {
        return [
            ...list
        ]
    } else {
        return [
            ...list,
            city
        ]
    }
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
                currentCityName: action.payload.city,
                lastCities: [
                    ...state.lastCities,
                    action.payload.city
                ],
                loading: false,
                error: null
            }
        case 'FETCH_CITY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'SET_CURRENT_CITY':
            return {
                ...state,
                currentCityName: action.payload,
                lastCities: updateLastCities(state.lastCities, action.payload)
            }
        default:
            return state
    }
}

export default reducer
