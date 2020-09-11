import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
 
import TextArea from '../styled-components/TextArea.jsx'
import InputField from '../styled-components/InputField.jsx'
import Button from '../styled-components/Button.jsx'
import Wrapper from '../styled-components/Wrapper'
import Header from '../styled-components/Header'
import LinkButton from '../styled-components/LinkButton.jsx'

class CreateListForm extends Component {
  state = {
    title: "",
    people: []
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
    console.log(event)
    this.props.setListDetails(event)
    this.props.createList(event)
    localStorage.setItem("id", event.id)
    localStorage.setItem("title", event.title)
    localStorage.setItem("people", event.people.join(", "))
    console.log(localStorage)
    this.props.history.push("/list")
  }

  render() {
    return (
      <>
        <Header>
          <LinkButton href="/" secondary>Home</LinkButton>
        </Header>
        
        <Wrapper>
          <form onSubmit={this.handleSubmit}>
            <h1>Create your list</h1>

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

            { this.state.people.length === 0
              ?
              <Button type="submit" disabled>Create list</Button>
              :
              <Button type="submit" primary>Create list</Button>
            }
          </form>
        </Wrapper>
      </>
    )
  }
}

export default withRouter(CreateListForm)