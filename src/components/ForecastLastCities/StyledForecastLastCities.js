import styled from 'styled-components'

const ForecastLastCitiesList = styled.ul`
  display: flex;
  margin-bottom: 10px;
  padding-left: 0;
  list-style: none;
`

const ForecastLastCitiesItem = styled.li`
  color: #47d9d1;
  text-decoration: underline;
  cursor: pointer;
  
  &:not(:last-child) {
    margin-right: 10px;
  }
  
  &:hover {
    color: #239cbf;
  }
`

export {
    ForecastLastCitiesList,
    ForecastLastCitiesItem
}
