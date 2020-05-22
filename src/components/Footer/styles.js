import styled from 'styled-components';
import logo from '../../assets/img/logo-brand-marvel-black.png';

export const Container = styled.footer`
  display: flex;
  height: 80px;
  padding: 0 16px;
  background-color: #000000;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Marvel logo site Oficial',
})`
  display: inline-block;
  height: 100%;
`;
