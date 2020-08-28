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

  render() {
    let peopleArray = this.props.people.map((person) => {
      return <li key={person}> {person} </li>
    })

    return (
      <div>
        <h1>{ this.props.title }</h1>
        <ul>
          { peopleArray }
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
  setLists: setLists
}

let mapStateToProps = (globalState) => {
  return {
    lists: globalState.listInfo.lists,
    id: globalState.listInfo.id,
    title: globalState.listInfo.title,
    people: globalState.listInfo.people    
  }
}

let MagicalComponent = withRouter(List)

export default connect(mapStateToProps, mapDispatchToProps)(MagicalComponent)