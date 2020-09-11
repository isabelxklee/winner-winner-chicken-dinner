import styled from 'styled-components'

const TextArea = styled.textarea`
  height: 10em;
  width: 75%;
  padding: 1em 1em;
  border: 3px solid black;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2em;

  @media(max-width: 720px) {
    width: 80%;
    margin-top: 0.4em;
    height: 8em;
  }
`

export default TextArea