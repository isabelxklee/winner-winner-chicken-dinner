import styled from 'styled-components'

const Button = styled.button`
  padding: 0.6em 1em;
  margin: 1em 1em 1em 0em;
  color: white;
  background-color: black;
  border: 1px solid black;
  font-family: "Roboto Mono",monospace;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  opacity: ${props => props.primary ? "1" : "0.4"};
  cursor: pointer;

  @media(max-width: 720px) {
    
  }
`

export default Button