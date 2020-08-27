import React, { Component } from 'react'
import ListForm from './ListForm'
import SingleList from './SingleList'

class Home extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/lists")
    .then(r => r.json())
    .then((array) => {
      this.setState({
        lists: array
      })
    })
  }

  render() {
    let listArray = this.state.lists.map((singleList) => {
      return <SingleList key = { singleList.title } list = { singleList } />
    })

    console.log(this.state)

    return (
      <div>
        <h1>Winner winner, chicken dinner!</h1>
        <ListForm />
        { listArray }
      </div>
    )
  }
}

export default Home