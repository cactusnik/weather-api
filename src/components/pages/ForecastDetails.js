import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ForecastList from '../ForecastList'
import {
    Page,
    Container
} from "./StyledHomePage";

const CustomLink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  color: #47d9d1;
  text-decoration: underline;
  
  &:hover {
    color: #239cbf;
  }
`

const Forecast = ({city: { forecast = [] } = {} }) => {
    return (
        <Page>
            <Container>
                <CustomLink to='/'>Back to Home</CustomLink>
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
