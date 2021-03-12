import React from 'react'
import {Container} from './styles'
import {LinkButton} from '../../styles'

const Header = () => (
  <Container>
    <LinkButton href="/" secondary>
      Home
    </LinkButton>
    <LinkButton href="/list" secondary>
      Back to list
    </LinkButton>
  </Container>
)

export default Header
