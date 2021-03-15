import React from 'react'
import {FooterContainer, ExternalLink} from './styles'

const Footer = () => (
  <FooterContainer>
    <ExternalLink
      href="https://github.com/isabelxklee/winner-winner-chicken-dinner"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      GitHub
    </ExternalLink>
    <ExternalLink
      href="https://www.kleetime.com"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Made by Isabel K. Lee
    </ExternalLink>
  </FooterContainer>
)

export default Footer
