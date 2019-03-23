import React from 'react'

const {
    Provider: OpenWeatherMapServiceProvider,
    Consumer: OpenWeatherMapServiceConsumer
} = React.createContext()

export {
    OpenWeatherMapServiceProvider,
    OpenWeatherMapServiceConsumer
}
