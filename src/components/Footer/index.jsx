import React from 'react'
import {FooterContainer} from './styles'
import {FooterLink} from '../../styles'

const Footer = () => (
  <FooterContainer>
    <FooterLink
      href="https://github.com/isabelxklee/winner-winner-chicken-dinner"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      GitHub
    </FooterLink>
    <FooterLink
      href="https://www.kleetime.com"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Made by Isabel K. Lee
    </FooterLink>
  </FooterContainer>
)

export default Footer
