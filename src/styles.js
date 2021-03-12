import styled from 'styled-components'
import {Form, Field} from 'formik'

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
  font-family: 'Roboto Mono', monospace;
  padding: 0.6em 1em;
  margin: 1em 1em 1em 0em;
  color: white;
  background-color: black;
  border: 1px solid black;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  width: fit-content;
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

export const StyledForm = styled(Form)`
  display: grid;
  width: 75%;
  text-align: left;

  @media (max-width: 1000px) {
    width: 75%;
  }
`

export const StyledField = styled(Field)`
  font-family: 'Roboto Mono', monospace;
  height: 3em;
  padding: 0em 1em;
  border: 3px solid black;
  font-size: 1.2em;
  width: 100%;

  @media (max-width: 720px) {
    width: 80%;
    margin-top: 1em;
  }
`

export const Label = styled.label`
  font-size: 28px;
  margin: 10px 0;
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
    margin: 10px 0 0 0;
  }
`

export const InputContainer = styled.div`
  margin: 2rem 0;
`

export const LI = styled.li`
  text-indent: -1.7em;
  font-size: 1.2em;

  &:before {
    content: '🌱 ';
  }
`

export const UL = styled.ul`
  margin-bottom: 3em;
  list-style: none;
`
