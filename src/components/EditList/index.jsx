import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Wrapper, TextArea, Button} from '../../styles'

class EditList extends Component {
  state = {
    title: localStorage.title,
    people: localStorage.people,
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

  deleteList = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <Wrapper secondary>
          <form onSubmit={this.handleSubmit}>
            <h1>Edit your list</h1>

            <div className="section">
              <h3>List title</h3>
              <p>
                What's the purpose of this list? Is it for a stand down meeting? Or deciding who
                gets to pet the cute dog next?
              </p>
              <input
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

            <Button type="submit" primary>
              Save changes
            </Button>
          </form>

          <div className="danger">
            <h3>Danger zone</h3>
            <p>Deleting a list is permanent, so make sure you're making the right decision!</p>
            <Button onClick={this.deleteList} primary>
              Delete list
            </Button>
          </div>
        </Wrapper>
      </>
    )
  }
}

export default withRouter(EditList)
