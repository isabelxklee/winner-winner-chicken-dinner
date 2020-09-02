import styled from 'styled-components'

const InputField = styled.input`
  height: 3em;
  width: 65%;
  padding: 0em 1em;
  border: 3px solid black;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2em;

  @media(max-width: 720px) {
    width: 100%;
  }
`

export default InputField