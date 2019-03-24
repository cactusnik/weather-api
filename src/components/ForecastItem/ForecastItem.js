import React from 'react'
import {
    StyledForecastItem,
    ForecastAvg,
    ForecastWeek
} from "./StyledForecastItem";

const ForecastItem = ({ week, temp , icon, details, color }) => {
    return (
        <StyledForecastItem color={color}>
            <ForecastWeek>{week}</ForecastWeek>
            <ForecastAvg>{temp}°C</ForecastAvg>
            <div className="forecast__wrap-img">
                <img src={icon} alt={details['current']}/>
            </div>
            <span className="forecast__more">{details['current']}</span>
        </StyledForecastItem>
    )
}

export default ForecastItem
