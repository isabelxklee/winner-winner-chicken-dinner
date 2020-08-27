import React, { Component } from 'react'
import ListForm from './ListForm'

const API = "http://localhost:3001/lists"

class Home extends Component {
  render() {

    return (
      <div>
        <h1>Winner winner, chicken dinner!</h1>
        <ListForm API={API} />
      </div>
    )
  }
}

export default Home