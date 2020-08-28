import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
const chance = require('chance').Chance()

class Generator extends Component {
  state = {
    luckyIndex: 0
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

  formatLocalStorage = () => {
    let peopleArray = this.formatStringToArr(localStorage.people)
    peopleArray = chance.shuffle(peopleArray)
    localStorage.setItem("people", peopleArray.join(", "))
    return peopleArray

    // localStorage.people returns a string
    // turn that string into an array
    // shuffle the array
    // then save it again as a string to localStorage
  }

  handleChange = () => {
    let arr = this.formatLocalStorage()
    let i = 0

    while (i < arr.length) {
      this.setState({
        luckyIndex: this.state.luckyIndex += i
      })
      i++
    }
  }

  render() {
    console.log(this.formatLocalStorage())
    console.log(this.state.luckyIndex)

    return (
      <div>
        <h3>Who's the lucky duck?</h3>
        <h1>placeholder name</h1>

        <p>There are 0 people left.</p>
        <button name="this is a button" onClick={this.handleChange}>Next spin</button>
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