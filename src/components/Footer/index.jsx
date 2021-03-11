import React from "react";
import { FooterContainer } from "./styles";

const Footer = () => (
  <FooterContainer>
    <a
      href="https://github.com/isabelxklee/winner-winner-chicken-dinner"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      GitHub
    </a>
    <a
      href="https://www.kleetime.com"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Made by Isabel K. Lee
    </a>
  </FooterContainer>
);

export default Footer;
