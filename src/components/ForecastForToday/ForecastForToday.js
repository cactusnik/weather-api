import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import ErrorIndicator from '../ErrorIndicator'
import Spinner from '../Spinner'
import ForecastItem from '../ForecastItem'

const ForecastForToday = ({error, loading, city: { forecast = [], name, country } = {} }) => {

    if (error) {
        return <ErrorIndicator />
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            <h2>{name}{country}</h2>
            <ForecastItem {...forecast[0]}/>
            <Link to='/details'>More</Link>
        </div>
    )
}

const mapStateToProps = ({error, loading, cities, currentCityName}) => {
    return {
        error,
        loading,
        city: cities.find((city) => {
            return city.name === currentCityName
        })
    }
}

export default connect(mapStateToProps)(ForecastForToday)
