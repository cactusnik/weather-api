import React from 'react'

import InputSearch from '../InputSearch'
import ForecastForToday from '../ForecastForToday'
import ForecastLastCities from '../ForecastLastCities'
import {
    Page,
    Container,
    Title
} from "./StyledHomePage";

const HomePage = () => {
    return (
        <Page>
            <Container>
                <Title>Wheather APIs</Title>
                <InputSearch />
                <ForecastLastCities />
                <ForecastForToday />
            </Container>
        </Page>
    )
}

export default HomePage
