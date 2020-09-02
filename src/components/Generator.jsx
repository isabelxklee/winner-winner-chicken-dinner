import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
const chance = require('chance').Chance()

class Generator extends Component {
  state = {
    luckyIndex: 0,
    array: []
  }

  componentDidMount() {
    fetch(this.props.localURL)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
      this.formatLocalStorage()
    })
  }

  formatStringToArr = (string) => { 
    return string.replace( /[\r\n]+/gm, ", " ).split(", ")
  }

  formatLocalStorage = () => {
    let peopleArray = this.formatStringToArr(localStorage.people)
    peopleArray = chance.shuffle(peopleArray)
    localStorage.setItem("people", peopleArray.join(", "))

    this.setState({
      array: peopleArray
    })

    // localStorage.people returns a string
    // turn that string into an array
    // shuffle the array
    // then save it again as a string to localStorage
  }

  handleChange = () => {
    let arrLength = this.state.array.length

    if (this.state.luckyIndex < arrLength) {
      this.setState({
        luckyIndex: this.state.luckyIndex + 1
      })
    } else {
      console.log("this is the last number!")
    }
  }

  peopleLeft = () => {
    
  }

  render() {
    console.log(this.state.array)
    console.log(`Lucky index: ${this.state.luckyIndex}`)

    let peopleLeft = this.state.array.length - this.state.luckyIndex - 1

    return (
      <div>
        <h3>Who's the lucky duck?</h3>
        <h1>{this.state.array[this.state.luckyIndex]}</h1>
        <p>There are {peopleLeft} people left.</p>

        { peopleLeft === 0
          ?
          <button name="this is a button" onClick={this.handleChange} disabled>Next spin</button>
          :
          <button name="this is a button" onClick={this.handleChange}>Next spin</button>
        }
        
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

let setListDetails = (response) => {
  return {
    type: "SET_LIST_DETAILS",
    payload: response
  }
}

let mapDispatchToProps = {
  setLists: setLists,
  setListDetails: setListDetails
}

let mapStateToProps = (globalState) => {
  return {
    lists: globalState.listInfo.lists,
    id: globalState.listInfo.id,
    title: globalState.listInfo.title,
    people: globalState.listInfo.people    
  }
}

let MagicalComponent = withRouter(Generator)

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)