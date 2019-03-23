import styled from 'styled-components'

const StyledForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color || '#47d9d1'};
  color: #ffffff;
`

const ForecastWeek = styled.h2`
  font-size: 1.25rem;
  text-transform: uppercase;
`

const ForecastAvg = styled.span`
  font-size: 2rem;
`

export {
    StyledForecastItem,
    ForecastWeek,
    ForecastAvg
}
