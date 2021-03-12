import React from 'react'
import {withRouter} from 'react-router-dom'
import {Wrapper, Header, LinkButton, LI, UL} from '../../styles'

const List = () => {
  const formatStringToArr = (string) => string.replace(/[\r\n]+/gm, ', ').split(', ')

  return (
    <>
      <Header>
        <LinkButton href="/" secondary>
          Home
        </LinkButton>
      </Header>

      <Wrapper secondary>
        <h1>{localStorage.title}</h1>
        <UL>
          {formatStringToArr(localStorage.list).map((item, index) => (
            <LI key={index}>{item}</LI>
          ))}
        </UL>
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
