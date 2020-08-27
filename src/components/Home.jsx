import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListForm from './ListForm'

const API = "http://localhost:3001/lists"

class Home extends Component {
  render() {

    return (
      <div>
        <h1>Winner winner, chicken dinner!</h1>
        <ListForm API={API} />
        <Link to="/list" exact="true">Your list</Link>
      </div>
    )
  }
}

export default Home