import styled from 'styled-components';

import Button from './button';

const Submit = styled(Button).attrs({
  type: 'submit',
})`
  color: var(--color-white);
  background-color: var(--color-yellow);
  border-color: var(--color-yellow);

  &:hover {
    background-color: var(--color-yellow-dark);
    border-color: var(--color-yellow-dark);
  }
  &:focus {
    outline: solid 1px var(--color-yellow-dark);
  }
`;

export default Submit;
