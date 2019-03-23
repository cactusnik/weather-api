import React from 'react'
import { OpenWeatherMapServiceConsumer } from "../OpenWeatherMapServiceContext";

const WithOpenWeatherMapService = () => (Wrapped) => {

    return (props) => {
        return (
            <OpenWeatherMapServiceConsumer>
                {(openWeatherMapService) => {
                    return <Wrapped {...props} openWeatherMapService={openWeatherMapService} />
                }}
            </OpenWeatherMapServiceConsumer>
        )
    }
}

export {
    WithOpenWeatherMapService
}
