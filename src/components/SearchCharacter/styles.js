import { Field } from 'formik';
import styled, { css } from 'styled-components';

const status = {
  default: css`
    border-color: var(--color-smoke);
  `,

  required: css`
    border-color: var(--color-red-dark);
    box-shadow: 0 0 0 1px inset var(--color-red-dark);
    color: var(--color-red-dark);

    &:focus {
      outline: solid 1px var(--color-red-dark);
    }
    ::placeholder {
      color: var(--color-red-dark);
    }
  `,
};

export const Input = styled(Field)`
  width: calc(100% - 80px);
  height: 34px;
  position: relative;
  border: 1px solid var(--color-smoke);
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  padding: 0 4px;
  font-weight: 700;

  ${(props) => status[props.status || 'default']}
`;

export const Container = styled.div`
  margin: 16px 0;

  form {
    display: flex;
    justify-content: space-between;
  }
`;
