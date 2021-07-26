import styled, {createGlobalStyle} from 'styled-components'
import {Form, Field} from 'formik'
import {NavLink} from 'react-router-dom'
import GTFlexa700 from './fonts/GT-Flexa-Expanded-Bold-Trial.woff2'
import GTFlexa900 from './fonts/GT-Flexa-Expanded-Black-Trial.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GT Flexa Trial';
    font-weight: 700;
    src: local('GT Flexa Trial Expanded'),
      url(${GTFlexa700});
  }

  @font-face {
    font-family: 'GT Flexa Trial';
    font-weight: 900;
    src: local('GT Flexa Trial Expanded'),
      url(${GTFlexa900}) format('woff2');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }
`

export const Wrapper = styled.div`
  padding: 64px 200px;
  background: radial-gradient(#e3e73b, #fff 65%);
  text-align: left;
  position: relative;

  @media (max-width: 720px) {
    padding: 48px;
  }
`

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 720px) {
    font-size: 20px;
  }
`

export const P = styled.p`
  font-size: 16px;
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
  opacity: ${props => props.disabled ? 0.4 : 1};

  @media (max-width: 720px) {
    width: 96%;
    margin: 0.6em 0em;
  }
`

export const InternalLink = styled(NavLink)`
  color: #000;
  text-decoration: underline;
  border: none;
  margin-right: 32px;
  font-weight: 600;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`

export const SecondaryInternalLink = styled(InternalLink)`
  font-family: 'Roboto Mono', monospace;
  padding: 0.6em 1em;
  color: white;
  background-color: black;
  border: 1px solid black;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  width: fit-content;
  cursor: pointer;
  display: block;
  margin: 1em auto;
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
  font-size: 16px;
  width: 100%;

  @media (max-width: 720px) {
    width: 80%;
    margin-top: 1em;
  }
`

export const TextArea = styled(StyledField)`
  height: 10em;
  padding: 1em 1em;
  font-size: 16px;

  @media (max-width: 720px) {
    height: 8em;
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
