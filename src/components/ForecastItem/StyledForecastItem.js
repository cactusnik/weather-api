import styled from 'styled-components'

const StyledForecastItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color || '#47d9d1'};
  color: #ffffff;
`

const ForecastWeek = styled.h2`
  margin-bottom: 35px;
  font-size: 1.25rem;
  text-transform: uppercase;
`

const ForecastAvg = styled.span`
  font-size: 2rem;
  margin-bottom: 50px;
`

export {
    StyledForecastItem,
    ForecastWeek,
    ForecastAvg
}
