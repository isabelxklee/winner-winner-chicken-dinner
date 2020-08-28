import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class Generator extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    fetch(this.props.localURL)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
      this.setLocalState(listsArray)
    })
  }

  setLocalState = (arr) => {
    this.setState({
      lists: arr
    })
  }

  remove_linebreaks = (string) => { 
    return string.replace( /[\r\n]+/gm, ", " ).split(", ")
  }

  findPeople = () => {
    let peopleArray = this.state.lists[this.state.lists.length-1]

    if(typeof peopleArray != "undefined") {
      peopleArray = this.remove_linebreaks(peopleArray.people)
      // for (var i = peopleArray.length - 1; i > 0; i--) {
      //   var rand = Math.floor(Math.random() * (i + 1));
      //   [peopleArray[i], peopleArray[rand]] = [peopleArray[rand], peopleArray[i]]
      // }
    }

    return peopleArray
  }

  nextSpin = () => {
    // let arr = [...this.findPeople()]
    // if(arr.length > 1) {
    //   arr.pop()
    // }
    // this.setState({
    //   lists: arr
    // })
  }

  render() {
    // let randomArr = this.findPeople()
    // console.log(randomArr)

    console.log(this.state.lists)

    return (
      <div>
        <h3>Who's the lucky duck?</h3>
        <h1>placeholder name</h1>

        {/* <p>{this.findPeople()}</p> */}

        {/* <p>There are 0 people left.</p> */}
        <button name="this is a button" onClick={this.nextSpin}>Next spin</button>
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