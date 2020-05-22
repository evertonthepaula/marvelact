import styled, { css } from 'styled-components';

const colors = {
  default: css`
    color: var(--color-smoke);
    background-color: var(--color-snow);
    border-color: var(--color-dark-snow);

    &:hover {
      background-color: var(--color-dark-snow);
    }
    &:focus {
      outline: solid 1px var(--color-dark-snow);
    }
  `,

  white: css`
    color: var(--color-smoke);
    background-color: var(--color-white);
    border-color: var(--color-dark-snow);

    &:hover {
      background-color: var(--color-dark-snow);
    }
    &:focus {
      outline: solid 1px var(--color-smoke);
    }
  `,

  blue: css`
    color: var(--color-white);
    background-color: var(--color-blue);
    border-color: var(--color-blue);

    &:hover {
      background-color: var(--color-blue-dark);
      border-color: var(--color-blue-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  `,

  green: css`
    color: var(--color-white);
    background-color: var(--color-green);
    border-color: var(--color-green);

    &:hover {
      background-color: var(--color-green-dark);
      border-color: var(--color-green-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  `,

  orange: css`
    color: var(--color-white);
    background-color: var(--color-orange);
    border-color: var(--color-orange);

    &:hover {
      background-color: var(--color-orange-dark);
      border-color: var(--color-orange-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  `,

  red: css`
    color: var(--color-white);
    background-color: var(--color-red);
    border-color: var(--color-red);

    &:hover {
      background-color: var(--color-red-dark);
      border-color: var(--color-red-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0 4px;
  min-height: 32px;
  font-size: 1.4rem;
  font-family: var(--text-family);
  text-decoration: none;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &.white {
    color: var(--color-smoke);
    background-color: var(--color-white);
    border-color: var(--color-dark-snow);

    &:hover {
      background-color: var(--color-dark-snow);
    }
    &:focus {
      outline: solid 1px var(--color-smoke);
    }
  }

  &.blue {
    color: var(--color-white);
    background-color: var(--color-blue);
    border-color: var(--color-blue);

    &:hover {
      background-color: var(--color-blue-dark);
      border-color: var(--color-blue-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }

  &.green {
    color: var(--color-white);
    background-color: var(--color-green);
    border-color: var(--color-green);

    &:hover {
      background-color: var(--color-green-dark);
      border-color: var(--color-green-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }

  &.orange {
    color: var(--color-dark-snow);
    background-color: var(--color-orange);
    border-color: var(--color-orange);

    &:hover {
      background-color: var(--color-orange-dark);
      border-color: var(--color-orange-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }

  &.red {
    color: var(--color-dark-snow);
    background-color: var(--color-red);
    border-color: var(--color-red);

    &:hover {
      background-color: var(--color-red-dark);
      border-color: var(--color-red-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }

  &.yellow {
    color: var(--color-white);
    background-color: var(--color-yellow);
    border-color: var(--color-yellow);

    &:hover {
      background-color: var(--color-yellow-dark);
      border-color: var(--color-yellow-dark);
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }

  &[disabled] {
    color: var(--color-smoke);
    background-color: var(--color-snow);
    border-color: var(--color-dark-snow);
    cursor: not-allowed;
    opacity: 0.4;

    &:hover {
      color: var(--color-smoke);
      background-color: var(--color-snow);
      border-color: var(--color-dark-snow);
      cursor: not-allowed;
      opacity: 0.4;
    }
    &:focus {
      outline: solid 1px var(--color-blue-dark);
    }
  }

  ${(props) => colors[props.color || 'default']}
`;

export default Button;
