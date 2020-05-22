import React from 'react';

import Dots from '../Dots';
import { Container, Image, Info } from './styles';

export default function EmptyResult() {
  return (
    <Container>
      <Image />
      <Info>
        Buscando <Dots />
      </Info>
    </Container>
  );
}
