import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import Wrapper from '../styled-components/Wrapper'
import LinkButton from '../styled-components/LinkButton.jsx'
import Header from '../styled-components/Header.jsx'

class List extends Component {
  formatStringToArr = (string) => { 
    return string.replace( /[\r\n]+/gm, ", " ).split(", ")
  }

  formatLocalStorage = () => {
    let peopleArray = this.formatStringToArr(localStorage.people)
    return peopleArray
  }

  render() {
    let peopleArray = this.formatLocalStorage().map((person) => {
      return <li key={person}> {person} </li>
    })

    return (
      <>
        <Header>
          <LinkButton href="/" secondary>Home</LinkButton>
        </Header>

        <Wrapper secondary>
          <h1>{ localStorage.title }</h1>
          <ul>
            { peopleArray }
          </ul>
          <LinkButton primary href="/edit-list">Edit list</LinkButton>
          <LinkButton primary href="/spin-the-wheel">Spin the wheel</LinkButton>
        </Wrapper>
      </>
    )
  }
}

export default withRouter(List)