import React from 'react'

import ForecastItem from '../ForecastItem'
import { StyledForecastList } from './StyledForecastList'

const ForecastList = (props) => {
    const colors = ['#47d9d1', '#43d3cc', '#3dc7bf', '#36bcbf', '#2eb1bf', '#29a6bf', '#239cbf']

    const items = Object.keys(props).map((item) => {
        return <ForecastItem key={item} {...props[item]} color={colors[item]} />
    })

    return (
        <StyledForecastList>
            {items}
        </StyledForecastList>
    )
}

export default ForecastList
