import React from 'react';
import { Container, Logo } from './styles';

export default function Footer() {
  return (
    <Container>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.marvel.com/"
      >
        <Logo />
      </a>
    </Container>
  );
}
