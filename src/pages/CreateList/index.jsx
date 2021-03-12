import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Wrapper, Button, InputField, TextArea, Header, LinkButton} from '../../styles'

class CreateList extends Component {
  state = {
    title: '',
    people: [],
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('title', this.state.title)
    localStorage.setItem('people', this.state.people)
    this.props.history.push('/list')
  }

  render() {
    return (
      <>
        <Header>
          <LinkButton href="/" secondary>
            Home
          </LinkButton>
        </Header>

        <Wrapper secondary>
          <form onSubmit={this.handleSubmit}>
            <h1>Create your list</h1>

            <div className="section">
              <h3>List title</h3>
              <p>
                What's the purpose of this list? Is it for a stand down meeting? Or deciding who
                gets to pet the cute dog next?
              </p>
              <InputField
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>

            <div className="section">
              <h3>Enter a list</h3>
              <p>
                Write all the items or names separated by a comma. For example, "apple, orange,
                banana."
              </p>
              <TextArea
                name="people"
                value={this.state.people}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>

            {this.state.people.length === 0 ? (
              <Button type="submit" disabled>
                Create list
              </Button>
            ) : (
              <Button type="submit" primary>
                Create list
              </Button>
            )}
          </form>
        </Wrapper>
      </>
    )
  }
}

export default withRouter(CreateList)
