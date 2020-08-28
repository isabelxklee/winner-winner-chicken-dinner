import React, { Component } from 'react'
import CreateListForm from './CreateListForm'

class Home extends Component {
  render() {

    return (
      <div>
        <h1>Winner winner, chicken dinner!</h1>
        <CreateListForm localURL={this.props.localURL} />
      </div>
    )
  }
}

export default Home