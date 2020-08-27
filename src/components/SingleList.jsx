import React, { Component } from 'react'

export default class SingleList extends Component {
  render() {
    let { title, people } = this.props.list

    return (
      <div>
        <h1>{ title}</h1>
        <p>{ people }</p>
      </div>
    )
  }
}
