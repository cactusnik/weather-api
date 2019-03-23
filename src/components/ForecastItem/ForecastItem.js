import React from 'react'
import {
    StyledForecastItem,
    ForecastAvg,
    ForecastWeek
} from "./StyledForecastItem";

const ForecastItem = ({ week = 'MO', avgTemp = 17, icon, maxtemp, mintemp, text, color }) => {
    return (
        <StyledForecastItem color={color}>
            <ForecastWeek>{week}</ForecastWeek>
            <ForecastAvg>{avgTemp}</ForecastAvg>
            <div className="forecast__wrap-img">
                <img src={icon} alt={text}/>
            </div>
            <span className="forecast__more">{text}</span>
        </StyledForecastItem>
    )
}

export default ForecastItem
