import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import Wrapper from '../styled-components/Wrapper'
import TextArea from '../styled-components/TextArea.jsx'
import InputField from '../styled-components/InputField.jsx'
import Button from '../styled-components/Button.jsx'
import Header from '../styled-components/Header'
import LinkButton from '../styled-components/LinkButton.jsx'

class EditListForm extends Component {
  state = {
    title: localStorage.title,
    people: localStorage.people
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem("title", this.state.title)
    localStorage.setItem("people", this.state.people)
    this.props.history.push("/list")
  }

  deleteList = () => {
    localStorage.clear()
    this.props.history.push("/")
  }

  render() {
    return (
      <>
        <Header>
          <LinkButton href="/" secondary>Home</LinkButton>
          <LinkButton href="/list" secondary>Back to list</LinkButton>
        </Header>

        <Wrapper secondary>
          <form onSubmit={this.handleSubmit}>
            <h1>Edit your list</h1>

            <div className="section">
              <h3>List title</h3>
              <p>What's the purpose of this list? Is it for a stand down meeting? Or deciding who gets to pet the cute dog next?</p>
              <InputField type="text" name="title" value={this.state.title} onChange={this.handleChange} autoComplete="off" />
            </div>

            <div className="section">
              <h3>Enter a list</h3>
              <p>Write all the items or names separated by a comma. For example, "apple, orange, banana."</p>
              <TextArea name="people" value={this.state.people} onChange={this.handleChange} autoComplete="off" />
            </div>

            <Button type="submit" primary>Save changes</Button>
          </form>

          <div className="danger">
            <h3>Danger zone</h3>
            <p>Deleting a list is permanent, so make sure you're making the right decision!</p>
            <Button onClick={this.deleteList} primary>Delete list</Button>
          </div>
          
        </Wrapper>
      </>
    )
  }
}

export default withRouter(EditListForm)