import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Generator extends Component {
  componentDidMount() {
    fetch(this.props.localURL)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
    })
  }

  remove_linebreaks = (string) => { 
    return string.replace( /[\r\n]+/gm, ", " ).split(", ")
  }

  findPeople = () => {
    let firstList = this.props.lists[this.props.lists.length-1]
    let peopleArray = []

    if(typeof firstList != "undefined") {
      peopleArray = this.remove_linebreaks(firstList.people)
      for (var i = peopleArray.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [peopleArray[i], peopleArray[rand]] = [peopleArray[rand], peopleArray[i]]
      }
    }

    return peopleArray
  }

  nextSpin = () => {
  
    
  }

  render() {
    console.log(this.findPeople())


    return (
      <div>
        <h3>Who's the lucky duck?</h3>
        <h1>placeholder name</h1>

        <p>There are 0 people left.</p>
        <button onClick={this.nextSpin}>Next spin</button>
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

let mapDispatchToProps = {
  setLists: setLists,
}

let mapStateToProps = (globalState) => {
  return {
    lists: globalState.listInfo.lists
  }
}

let MagicalComponent = withRouter(Generator)

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)