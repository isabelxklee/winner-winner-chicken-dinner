import React from 'react'
import {withRouter} from 'react-router-dom'
import {InternalLink, LI, UL, LinkContainer} from '../../styles'

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
      <LinkContainer>
        <InternalLink to="/edit-list">Edit list</InternalLink>
        <InternalLink to="/spin-the-wheel">Spin the wheel</InternalLink>
      </LinkContainer>
    </>
  )
}

export default withRouter(List)
