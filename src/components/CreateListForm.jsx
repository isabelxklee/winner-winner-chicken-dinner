import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import TextArea from '../styled-components/TextArea.jsx'
import InputField from '../styled-components/InputField.jsx'
import Button from '../styled-components/Button.jsx'
import Wrapper from '../styled-components/Wrapper'

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

  formatStringToArr = (string) => { 
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
        people: this.formatStringToArr(this.state.people)
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
    localStorage.setItem("id", response.id)
    localStorage.setItem("title", response.title)
    localStorage.setItem("people", response.people.join(", "))
    console.log(localStorage)
    this.props.history.push("/list")
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <h1>Create your list</h1>

          <div className="section">
            <h3>List title</h3>
            <p>What’s the purpose of this list? Is it for a stand down meeting? Or are you and your friends trying to figure out who gets to pet the cute dog next?</p>
            <InputField type="text" name="title" value={this.state.title} onChange={this.handleChange} autoComplete="off" />
          </div>

          <div className="section">
            <h3>Enter a list of names</h3>
            <p>Please enter all the names on a separate line. Otherwise you will break this machine. And it will be very sad.</p>
            <TextArea name="people" value={this.state.people} onChange={this.handleChange} autoComplete="off" />

          </div>

          { this.state.people.length === 0
            ?
            <Button type="submit" disabled>Create list</Button>
            :
            <Button type="submit" primary>Create list</Button>
          }
        </form>
      </Wrapper>
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