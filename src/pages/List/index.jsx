import React from 'react'
import {withRouter} from 'react-router-dom'
import {LinkButton, LI, UL} from '../../styles'

const List = () => {
  const formatStringToArr = (string) => string.replace(/[\r\n]+/gm, ', ').split(', ')

  return (
    <>
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
    </>
  )
}

export default withRouter(List)
