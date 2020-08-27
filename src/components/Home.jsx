import React, { Component } from 'react'
import ListForm from './ListForm'

class Home extends Component {
  render() {

    return (
      <div>
        <h1>Winner winner, chicken dinner!</h1>
        <ListForm localURL={this.props.localURL} />
      </div>
    )
  }
}

export default Home