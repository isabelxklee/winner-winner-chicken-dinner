import React, { Component } from 'react'
import styled from 'styled-components'
import CreateListForm from './CreateListForm'

const Wrapper = styled.div`
  padding: 4em;
  background: black;
`

class Home extends Component {
  render() {

    return (
      <Wrapper>
        <h1>Winner winner, chicken dinner!</h1>
        <CreateListForm localURL={this.props.localURL} />
      </Wrapper>
    )
  }
}

export default Home