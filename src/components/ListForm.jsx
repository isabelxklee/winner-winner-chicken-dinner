import React, { Component } from 'react'

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

    console.log(this.state)

    fetch('http://localhost:3000/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        people: this.state.people
      })
    })
      .then(r => r.json())
      .then(console.log)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            List title
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>

          <br />

          <label>
            Enter a list of names
            <textarea name="people" value={this.state.people} onChange={this.handleChange} />
          </label>

          <br />

          <input type="submit" value="Create list" />
        </form>
      </div>
    )
  }
}

export default ListForm