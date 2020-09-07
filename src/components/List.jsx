import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Wrapper from '../styled-components/Wrapper'
import LinkButton from '../styled-components/LinkButton.jsx'

class List extends Component {
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
    return peopleArray
  }

  render() {
    let peopleArray = this.formatLocalStorage().map((person) => {
      return <li key={person}> {person} </li>
    })

    return (
      <Wrapper>
        <h1>{ localStorage.title }</h1>
        <ul>
          { peopleArray }
        </ul>
        <LinkButton primary href="/edit-list">Edit list</LinkButton>
        <LinkButton primary href="/spin-the-wheel">Spin the wheel</LinkButton>
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