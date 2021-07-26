import React from 'react'
import {Container} from './styles'
import {InternalLink} from '../../styles'

const Header = () => (
  <Container>
    <InternalLink to="/">Home</InternalLink>
    {localStorage.length > 0 && <InternalLink to="/list">Back to list</InternalLink>}
  </Container>
)

export default Header