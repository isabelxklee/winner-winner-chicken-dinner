import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class Generator extends Component {
  state = {
    luckyIndex: null
  }

  componentDidMount() {
    fetch(this.props.localURL)
    .then(r => r.json())
    .then((listsArray) => {
      this.props.setLists(listsArray)
    })
  }

  handleChange = () => {

  }

  render() {
    console.log(this.props.lists)

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