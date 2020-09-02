import styled from 'styled-components'

const Button = styled.button`
  padding: 0.6em 1.8em;
  margin: 1em 0em;
  color: white;
  background-color: black;
  border: 1px solid black;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2em;
  font-weight: 700;
  opacity: ${props => props.primary ? "1" : "0.4"};

  @media(max-width: 720px) {
    
  }
`

export default Button