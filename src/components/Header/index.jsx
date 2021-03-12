import React from 'react'
import {Container} from './styles'
import {NavLink} from '../../styles'

const Header = () => (
  <Container>
    <NavLink href="/" secondary>
      Home
    </NavLink>
    <NavLink href="/list" secondary>
      Back to list
    </NavLink>
  </Container>
)

export default Header
