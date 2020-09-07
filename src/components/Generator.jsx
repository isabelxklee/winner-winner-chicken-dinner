import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Wrapper from '../styled-components/Wrapper'
import Button from '../styled-components/Button.jsx'
import LinkButton from '../styled-components/LinkButton.jsx'
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
      <Wrapper secondary>
        <div className="lucky-duck">
          <h3>Who's the lucky duck?</h3>
          <h1 id="lucky-duck">{this.state.array[this.state.luckyIndex]}</h1>
        </div>

        { peopleLeft === 1
          ?
          <p>There is <strong>{peopleLeft} left.</strong></p>
          :
          <p>There are <strong>{peopleLeft} left.</strong></p>
        }

        { peopleLeft === 0
          ?
          <LinkButton href="/list" primary>Back to list</LinkButton>
          :
          <Button onClick={this.handleChange} primary>Next spin</Button>
        }
        
      </Wrapper>
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