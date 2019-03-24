import styled from 'styled-components'

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
`

const Container = styled.div`
  margin-top: 25vh;
  width: 700px;
`

const Title = styled.h1`
  margin-top: 0;
  font-size: 4rem;
  text-align: center;
`

export {
    Page,
    Container,
    Title
}
