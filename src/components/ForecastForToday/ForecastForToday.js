import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import styled from 'styled-components'

import ErrorIndicator from '../ErrorIndicator'
import Spinner from '../Spinner'
import {
    ForecastContainer,
    ForecastTitle,
    ForecastData,
    ForecastRow,
    ForecastTemp,
    ForecastList,
    ForecastKey,
    ForecastLeft,
    ForecastIcon,
    ForecastItem
} from "./StyledForecastForToday";

const CustomLink = styled(Link)`
  color: #47d9d1;
  text-decoration: underline;
  
  &:hover {
    color: #239cbf;
  }
`

const ForecastForToday = (props) => {
    const { city, country, week, date, icon, temp, details = {}} = props

    const listDetails = Object.keys(details).map((key) => {
        return <ForecastItem key={key}><ForecastKey>{key}:</ForecastKey>{details[key]}</ForecastItem>
    })

    return (
        <ForecastContainer>
            <ForecastLeft>
                <ForecastRow>
                    <ForecastIcon>
                        <img src={icon} alt="Icon for weather"/>
                    </ForecastIcon>
                    <ForecastTemp>{temp}°C</ForecastTemp>
                </ForecastRow>
                <ForecastTitle>{city}, {country}</ForecastTitle>
                <ForecastData>{week}, {date}</ForecastData>
            </ForecastLeft>
            <div>
                <ForecastList>
                    {listDetails}
                </ForecastList>
            </div>
        </ForecastContainer>
    )
}

const ForecastForTodayContainer = ({error, loading, currentCityName , city: { forecast = [], city, country } = {} }) => {

    if (error) {
        return <ErrorIndicator />
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            {currentCityName
                ?   <>
                    <ForecastForToday {...forecast[0]} city={city} country={country} />
                    <CustomLink to='details'>Details forecast {city} for week</CustomLink>
                </>
                : null
            }
        </>
    )
}

const mapStateToProps = ({error, loading, cities, currentCityName}) => {
    return {
        error,
        loading,
        currentCityName,
        city: cities.find((city) => {
            return city.city === currentCityName
        })
    }
}

export default connect(mapStateToProps)(ForecastForTodayContainer)
