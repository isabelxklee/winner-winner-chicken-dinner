import React from 'react'
import {withRouter} from 'react-router-dom'
import {Wrapper, Header, LinkButton} from '../../styles'

const List = () => {
  const formatStringToArr = (string) => string.replace(/[\r\n]+/gm, ', ').split(', ')
  const formatLocalStorage = () => formatStringToArr(localStorage.list)

  return (
    <>
      <Header>
        <LinkButton href="/" secondary>
          Home
        </LinkButton>
      </Header>

      <Wrapper secondary>
        <h1>{localStorage.title}</h1>
        <ul>{formatLocalStorage()}</ul>
        <LinkButton primary href="/edit-list">
          Edit list
        </LinkButton>
        <LinkButton primary href="/spin-the-wheel">
          Spin the wheel
        </LinkButton>
      </Wrapper>
    </>
  )
}

export default withRouter(List)
