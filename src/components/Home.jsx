import React, { Component } from 'react'
import LinkButton from '../styled-components/LinkButton.jsx'
import Wrapper from '../styled-components/Wrapper'

class Home extends Component {
  render() {
    return (
      <Wrapper secondary>
        <h1>Winner winner, chicken dinner!</h1>
        <p>Enter a list and spin the wheel to get a random winner each time. Ready to get started?</p>
        <LinkButton href="/create-list" primary>Create a list</LinkButton>

        { localStorage.length > 0
        ?
        <LinkButton href="/list" primary>See my existing list</LinkButton>
        :
        <></>
        }
      </Wrapper>
    )
  }
}

export default Home