import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  height: 56px;
  margin-bottom: 5px;
`

const Input = styled.input`
    padding: 16px;
    width: 100%;
    border: 1px solid #1d92bf;
    background-color: #fff;
`

const Submit = styled.input`
  width: 122px;
  border: 0;
  background-color: #1d92bf;
  color: #fff;
  cursor: pointer;
`

export {
    Form,
    Input,
    Submit
}
