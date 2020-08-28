import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class CreateListForm extends Component {
  state = {
    title: "",
    people: []
  }

  componentDidMount() {
    fetch(this.props.localURL)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
    })
  }

  remove_linebreaks = (string) => { 
    return string.replace( /[\r\n]+/gm, ", " ).split(", ")
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`${this.props.localURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        people: this.remove_linebreaks(this.state.people)
      })
    })
    .then(r => r.json())
    .then((newList) => {
      this.handleResponse(newList)
    })
  }

  handleResponse = (response) => {
    console.log(response)
    this.props.setListDetails(response)
    this.props.createList(response)
    localStorage.setItem("people", response.people.join(", "))
    console.log(localStorage)
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

let setLists = (response) => {
  return {
    type: "SET_ALL_LISTS",
    payload: response
  }
}

let setListDetails = (response) => {
  return {
    type: "SET_LIST_DETAILS",
    payload: response
  }
}

let createList = (response) => {
  return {
    type: "CREATE_LIST",
    payload: response
  }
}

let mapDispatchToProps = {
  setLists: setLists,
  setListDetails: setListDetails,
  createList: createList
}

let MagicalComponent = withRouter(CreateListForm)

export default connect(null, mapDispatchToProps)(MagicalComponent)