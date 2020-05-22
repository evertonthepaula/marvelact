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
  width: 100%;
  height: 34px;
  margin: 4px 0 16px;
  padding: 0 4px;
  position: relative;
  border: 1px solid var(--color-smoke);
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  font-weight: 700;

  ${(props) => status[props.status || 'default']}
`;

export const Label = styled.label`
  width: 100%;
  color: var(--color-yellow);
  font-size: 1.4rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1240px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  flex: 1 1 360px;
  padding: 8px 16px;
`;

export const Title = styled.h1`
  color: var(--color-yellow);
`;

export const Text = styled.p`
  color: #fff;
`;

export const Warning = styled.small`
  font-size: 1.2rem;
  color: var(--color-yellow);
  font-weight: 900;
`;
