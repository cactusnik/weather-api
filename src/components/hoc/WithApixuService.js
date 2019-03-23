import React from 'react'
import { ApixuServiceConsumer } from "../ApixuServiceContext";

const WithApixuService = () => (Wrapped) => {

    return (props) => {
        return (
            <ApixuServiceConsumer>
                {(openWeatherMapService) => {
                    return <Wrapped {...props} openWeatherMapService={openWeatherMapService} />
                }}
            </ApixuServiceConsumer>
        )
    }
}

export {
    WithApixuService
}
