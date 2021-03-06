import styled from 'styled-components'

const LinkButton = styled.a`
  padding: 0.6em 1em;
  margin: 1em 1em 1em 0em;
  color: ${props => props.secondary ? "black" : "white"};
  background-color: ${props => props.secondary ? "none" : "black"};
  border: ${props => props.secondary ? "none" : "1px solid black"};
  font-family: "Roboto Mono",monospace;
  font-size: ${props => props.secondary ? "1.2em" : "1em"};
  font-weight: 700;
  text-decoration: ${props => props.secondary ? "underline" : "none"};
  display: inline-block;
  text-align: center;

  @media(max-width: 720px) {
    width: 80%;
    margin: 0.6em 0em;
    padding: ${props => props.secondary ? "0em" : "0.6em 1em"};
    text-align: ${props => props.secondary ? "left" : "center"};
  }
`

export default LinkButton