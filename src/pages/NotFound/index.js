import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Info } from './styles';

import img404 from '../../assets/img/404.jpg';

export default function index() {
  return (
    <Container>
      <h1>Ops! Parece que algo deu errado!</h1>
      <img src={img404} alt="404" />
      <Info>
        Não encontramos o conteúdo que você está procurando. <br /> Por favor,
        tente recarregar a pagina novamente ou{' '}
        <Link to="/">volte para a pagina inicial</Link>.
      </Info>
    </Container>
  );
}
