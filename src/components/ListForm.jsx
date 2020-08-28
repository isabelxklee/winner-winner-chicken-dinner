import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class ListForm extends Component {
  state = {
    title: "",
    people: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let { title, people } = this.state
    
    fetch(`${this.props.localURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, people
      })
    })
    .then(r => r.json())
    .then((newList) => {
      this.handleResponse(newList)
    })
  }

  handleResponse = (response) => {
    this.props.setListDetails(response)
    this.props.history.push("/list")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>List title</h3>
          <p>What’s the purpose of this list? Is it for a stand down meeting? Or are you and your friends trying to figure out who gets to pet the cute dog next?</p>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} autoComplete="off" />
          
          <br />

          <h3>Enter a list of names</h3>
          <p>Please enter all the names on a separate line. Otherwise you will break this machine. And it will be very sad.</p>
          <textarea name="people" value={this.state.people} onChange={this.handleChange} autoComplete="off" />

          <br />

          <input type="submit" value="Create list" />
        </form>
      </div>
    )
  }
}

let setListDetails = (response) => {
  return {
    type: "SET_LIST_DETAILS",
    payload: response
  }
}

let mapDispatchToProps = {
  setListDetails: setListDetails,
}

let MagicalComponent = withRouter(ListForm)

export default connect(null, mapDispatchToProps)(MagicalComponent)