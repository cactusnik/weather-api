import React from 'react'
import {
    StyledForecastItem,
    ForecastAvg,
    ForecastWeek,
    ForecastImg,
    ForecastText
} from "./StyledForecastItem";

const ForecastItem = ({ week, temp , icon, details, color }) => {
    return (
        <StyledForecastItem color={color}>
            <ForecastWeek>{week}</ForecastWeek>
            <ForecastAvg>{temp}°C</ForecastAvg>
            <ForecastImg>
                <img src={icon} alt={details['current']}/>
            </ForecastImg>
            <ForecastText>{details['current']}</ForecastText>
        </StyledForecastItem>
    )
}

export default ForecastItem
