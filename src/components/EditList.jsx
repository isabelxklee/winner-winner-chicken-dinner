import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
const API = "http://localhost:3001/lists"

class EditList extends Component {
  state = {
    title: this.props.lists[this.props.lists.length-1].title,
    people: this.props.lists[this.props.lists.length-1].people
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch(`${API}/${this.props.lists[this.props.lists.length-1].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>List title</h3>
          <p>What’s the purpose of this list? Is it for a stand down meeting? Or are you and your friends trying to figure out who gets to pet the cute dog next?</p>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          
          <br />

          <h3>Enter a list of names</h3>
          <p>Please enter all the names on a separate line. Otherwise you will break this machine. And it will be very sad.</p>
          <textarea name="people" value={this.state.people} onChange={this.handleChange} />

          <br />

          <input type="submit" value="Save changes" />
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

let mapDispatchToProps = {
  setLists: setLists,
}

let mapStateToProps = (globalState) => {
  return {
    lists: globalState.listInfo.lists
  }
}

let MagicalComponent = withRouter(EditList)

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)