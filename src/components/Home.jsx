import React, { Component } from 'react'
import CreateListForm from './CreateListForm'
import Wrapper from '../styled-components/Wrapper'

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