const cityLoaded = (cityId) => {
    return {
        type: 'CITY_LOADED',
        payload: cityId
    }
}

export {
    cityLoaded
}
