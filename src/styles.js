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
  min-height: calc(100vh - 186px);

  @media (max-width: 800px) {
    padding: 48px;
  }
`

export const H1 = styled.h1`
  font-family: 'GT Flexa Trial', sans-serif;
  font-weight: 900;
  font-size: 80px;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 54px;
  }
`

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`

export const P = styled.p`
  font-size: 16px;
`

export const Button = styled.button`
  font-family: 'Roboto Mono', monospace;
  padding: 10px 16px;
  margin-bottom: 16px;
  color: white;
  background-color: black;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  width: fit-content;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.4 : 1};

  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
  }
`

export const InternalLink = styled(NavLink)`
  color: #000;
  text-decoration: underline;
  border: none;
  margin: 0 32px 8px 0;
  font-weight: 600;

  @media (max-width: 800px) {
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
  display: flex;
  flex-direction: column;
  width: 75%;
  text-align: left;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const StyledField = styled(Field)`
  font-family: 'Roboto Mono', monospace;
  height: 3em;
  padding: 0em 1em;
  border: 3px solid black;
  font-size: 16px;
  width: 100%;

  @media (max-width: 800px) {
    width: 80%;
    margin-top: 0;
  }
`

export const TextArea = styled(StyledField)`
  height: 160px;
  padding: 16px;
  font-size: 16px;

  @media (max-width: 800px) {
    height: 128px;
    width: calc(100% - 32px);
  }
`

export const Label = styled.label`
  font-size: 28px;
  margin: 10px 0;

  @media (max-width: 1000px) {
    font-size: 20px;
    margin: 10px 0 0 0;
  }
`

export const InputContainer = styled.div`
  margin: 32px 0;

  @media (max-width: 800px) {
    margin: 24px 0;
  }
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

export const LinkContainer = styled.div`
  display: grid;
  margin-top: 24px;
`