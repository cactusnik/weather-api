import styled from 'styled-components'

const ForecastContainer = styled.div`
  display: flex;
  padding: 20px 15px;
  border: 1px solid #1d92bf;
`

const ForecastLeft = styled.div`
  width: 50%;
`

const ForecastTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #4e5f70;
`

const ForecastData = styled.time`
  margin-bottom: 15px;
  font-size: 1rem;
  color: #9ea9b7;
`

const ForecastRow = styled.div`
  display: flex;
  align-items: center;
`

const ForecastIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ForecastTemp = styled.span`
  font-size: 5rem;
  color: #53c2e8;
`

const ForecastList = styled.ul`
  list-style: none;
`

const ForecastItem = styled.li`
  margin-bottom: 10px;
`

const ForecastKey = styled.span`
  margin-right: 10px;
  color: #9ea9b7;
`

export {
    ForecastContainer,
    ForecastTitle,
    ForecastData,
    ForecastRow,
    ForecastTemp,
    ForecastList,
    ForecastKey,
    ForecastLeft,
    ForecastIcon
}
