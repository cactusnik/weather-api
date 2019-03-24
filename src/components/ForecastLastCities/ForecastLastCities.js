import React from 'react'
import { connect } from "react-redux";

import { setActiveCity } from "../../actions";
import {
    ForecastLastCitiesList,
    ForecastLastCitiesItem
} from "./StyledForecastLastCities";

const ForecastLastCities = ({cities = [], setActiveCity}) => {

    const items = cities.map(item => {
        return <ForecastLastCitiesItem key={item} onClick={() => setActiveCity(item)}>{item}</ForecastLastCitiesItem>
    })

    return (
        <ForecastLastCitiesList>
            {items}
        </ForecastLastCitiesList>
    )
}

const mapStateToProps = ({lastCities}) => {
    return {
        cities: lastCities
    }
}

const mapDispatchToProps = {
    setActiveCity
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastLastCities)
