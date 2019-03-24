import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ForecastList from '../ForecastList'
import {
    Page,
    Container
} from "./StyledHomePage";

const Forecast = ({city: { forecast = [] } = {} }) => {
    return (
        <Page>
            <Container>
                <Link to='/'>Back to Home page</Link>
                <ForecastList {...forecast} />
            </Container>
        </Page>
    )
}

const mapStateToProps = ({cities, currentCityName}) => {
    return {
        city: cities.find((city) => {
            return city.city === currentCityName
        })
    }
}

export default connect(mapStateToProps)(Forecast)
