import React from 'react'
import { connect } from "react-redux";
import { setActiveCity } from "../../actions";

const ForecastLastCities = ({cities = [], setActiveCity}) => {

    const items = cities.map(item => {
        return <span key={item} onClick={() => setActiveCity(item)}>{item}</span>
    })

    return (
        <>
            {items}
        </>
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
