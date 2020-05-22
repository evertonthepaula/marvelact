import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  height: 80px;
  background-color: var(--color-red-dark);
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 100%;

  text-align: center;
  align-items: center;
  justify-content: center;

  color: #999999;
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
  transition: color 0.2s;

  &:first-child {
    margin-left: 30px;
  }
  &:hover {
    color: #444444;
    cursor: pointer;
  }
`;

export const Logout = styled.span`
  display: flex;
  flex-direction: row;
  height: 100%;

  text-align: center;
  align-items: center;
  justify-content: center;

  color: #999999;
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
  transition: color 0.2s;

  &:hover {
    color: #444444;
    cursor: pointer;
  }
`;
