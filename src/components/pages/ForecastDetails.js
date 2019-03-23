import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ForecastList from '../ForecastList'

const Forecast = ({city: { forecast = [] } = {} }) => {
    return (
        <>
            <Link to='/'>Back to Home page</Link>
            <ForecastList {...forecast} />
        </>
    )
}

const mapStateToProps = ({cities, currentCityName}) => {
    return {
        city: cities.find((city) => {
            return city.name === currentCityName
        })
    }
}

export default connect(mapStateToProps)(Forecast)
