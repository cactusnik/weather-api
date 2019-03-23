const initialState = {
    cities: [],
    currentCityId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CITY_LOADED':
            return {
                cities: action.payload
            }
        default:
            return state
    }
}

export default reducer
