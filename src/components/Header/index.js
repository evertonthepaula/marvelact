import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, NavItem, Logout } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut(e) {
    e.preventDefault();
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <NavItem to="/">Home</NavItem>
      </nav>

      <Logout onClick={handleSignOut}>Sair do Sistema</Logout>
    </Container>
  );
}
