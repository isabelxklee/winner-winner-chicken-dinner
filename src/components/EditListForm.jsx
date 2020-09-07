import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Wrapper from '../styled-components/Wrapper'
import TextArea from '../styled-components/TextArea.jsx'
import InputField from '../styled-components/InputField.jsx'
import Button from '../styled-components/Button.jsx'

class EditListForm extends Component {
  state = {
    title: localStorage.title,
    people: localStorage.people
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
    
    fetch(`${this.props.localURL}/${localStorage.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        people: this.formatStringToArr(this.state.people)
      })
    })
    .then(r => r.json())
    .then((updatedList) => {
      this.handleResponse(updatedList)
    })
  }

  handleResponse = (response) => {
    this.props.setListDetails(response)
    localStorage.setItem("title", response.title)
    localStorage.setItem("people", response.people.join(", "))
    this.props.history.push("/list")
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <h1>Edit your list</h1>

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

          <Button type="submit" primary>Save changes</Button>
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

let mapDispatchToProps = {
  setListDetails: setListDetails,
  setLists: setLists
}

let mapStateToProps = (globalState) => {
  return {
    lists: globalState.listInfo.lists,
    id: globalState.listInfo.id,
    title: globalState.listInfo.title,
    people: globalState.listInfo.people    
  }
}

let MagicalComponent = withRouter(EditListForm)

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)