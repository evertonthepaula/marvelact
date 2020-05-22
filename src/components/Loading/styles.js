import styled from 'styled-components';

import img from '../../assets/img/load.gif';

export const Container = styled.div`
  text-align: center;
  padding: 16px;
`;

export const Image = styled.img.attrs({
  src: img,
  alt: 'buscando',
})``;

export const Info = styled.p`
  margin: 16px 0;
  font-size: 1.8rem;
`;
