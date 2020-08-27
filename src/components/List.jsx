import React, { Component } from 'react'
const API = "http://localhost:3001/lists"

class List extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then((array) => {
      this.setState({
        lists: array
      })
    })
  }

  findTitle = () => {
    let firstList = this.state.lists[1]

    if(typeof firstList != "undefined") {
      console.log("title valid!!!")
      return firstList.title
   }
  }

  remove_linebreaks = (string) => { 
    return string.replace( /[\r\n]+/gm, ", " ).split(", ")
  }

  findPeople = () => {
    let firstList = this.state.lists[1]

    if(typeof firstList != "undefined") {
      console.log("people valid!!!")
      console.log(firstList.people)

      let peopleArray = this.remove_linebreaks(firstList.people)
      console.log(peopleArray)

      return peopleArray.map((person) => {
        return <li key={person}>{person}</li>
      })
   }
  }

  render() {

    return (
      <div>
        <h1>{ this.findTitle() }</h1>
        <ul>
          { this.findPeople() }
        </ul>
        <button>Edit list</button>
        <button>Spin the wheel</button>
      </div>
    )
  }
}

export default List