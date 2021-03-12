import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 9rem 6rem 9rem;
  background: radial-gradient(#e3e73b, #fff 65%);
  text-align: left;

  @media (max-width: 720px) {
    padding: 4em 2em;
  }
`

export const Header = styled.div`
  padding: 1em 3em;
  text-align: center;
  top: 0;

  @media (max-width: 720px) {
    padding: 2em 1em 0em 1em;
  }
`

export const HomeWrapper = styled(Wrapper)`
  padding: 0;
`

export const InputField = styled.input`
  height: 3em;
  width: 75%;
  padding: 0em 1em;
  border: 3px solid black;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2em;

  @media (max-width: 720px) {
    width: 80%;
    margin-top: 1em;
  }
`

export const TextArea = styled.textarea`
  height: 10em;
  width: 75%;
  padding: 1em 1em;
  border: 3px solid black;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2em;

  @media (max-width: 720px) {
    width: 80%;
    margin-top: 0.4em;
    height: 8em;
  }
`

export const Button = styled.button`
  padding: 0.6em 1em;
  margin: 1em 1em 1em 0em;
  color: white;
  background-color: black;
  border: 1px solid black;
  font-family: 'Roboto Mono', monospace;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  opacity: ${(props) => (props.primary ? '1' : '0.4')};
  cursor: pointer;

  @media (max-width: 720px) {
    width: 96%;
    margin: 0.6em 0em;
  }
`

export const LinkButton = styled.a`
  padding: 0.6em 1em;
  margin: 1em 1em 1em 0em;
  color: ${(props) => (props.secondary ? 'black' : 'white')};
  background-color: ${(props) => (props.secondary ? 'none' : 'black')};
  border: ${(props) => (props.secondary ? 'none' : '1px solid black')};
  font-family: 'Roboto Mono', monospace;
  font-size: ${(props) => (props.secondary ? '1.2em' : '1em')};
  font-weight: 700;
  text-decoration: ${(props) => (props.secondary ? 'underline' : 'none')};
  display: inline-block;
  text-align: center;

  @media (max-width: 720px) {
    width: 80%;
    margin: 0.6em 0em;
    padding: ${(props) => (props.secondary ? '0em' : '0.6em 1em')};
    text-align: ${(props) => (props.secondary ? 'left' : 'center')};
  }
`
