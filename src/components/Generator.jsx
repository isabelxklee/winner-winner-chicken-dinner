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

    if(typeof firstList != "undefined") {
      console.log("people valid!!!")

      let peopleArray = this.remove_linebreaks(firstList.people)
      console.log(peopleArray)

      return peopleArray
   }
  }

  randomSort = (array) => {
    array = this.findPeople()

    if(typeof array != "undefined") {
      for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
      } 
    }

    return array
  }

  render() {

    return (
      <div>
        {this.randomSort()}
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