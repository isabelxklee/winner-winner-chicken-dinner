import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class List extends Component {
  componentDidMount() {
    fetch(this.props.localURL)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
    })
  }

  findTitle = () => {
    let firstList = this.props.lists[this.props.lists.length-1]

    if(typeof firstList != "undefined") {
      console.log("title valid!!!")
      return firstList.title
    }
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
        <Link to="/edit-list" exact="true"><button>Edit list</button></Link>
        <Link to="/spin-the-wheel" exact="true"><button>Spin the wheel</button></Link>
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

let MagicalComponent = withRouter(List)

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)