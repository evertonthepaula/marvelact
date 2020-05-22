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

export const Input = styled.input`
  width: 100%;
  height: 34px;
  margin: 8px 0;
  padding: 0 4px;
  position: relative;
  border: 1px solid var(--color-smoke);
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  font-weight: 700;

  ${(props) => status[props.status || 'default']}
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  position: relative;
  border: 1px solid var(--color-smoke);
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  padding: 8px 4px;
  font-weight: 700;

  ${(props) => status[props.status || 'default']}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
  color: var(--color-yellow);
  font-size: 1.4rem;
`;
