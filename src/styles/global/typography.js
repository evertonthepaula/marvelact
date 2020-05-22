import { css } from 'styled-components';

export default css`
  html {
    font-size: 62.5%;
    font-family: var(--text-family);
  }

  body {
    font-size: 100%;
    font-family: var(--text-family);
    -webkit-font-smoothing: antialiased;
  }

  h1,
  .title {
    display: inline-block;
    max-width: 100%;
    color: var(--title-color-primary);
    font-size: var(--font-Xlarge);
    font-family: var(--title-family);
  }

  h2,
  .subtitle {
    display: block;
    width: 100%;
    max-width: 100%;
    color: var(--title-color-primary);
    font-weight: bold;
    font-size: var(--font-large);
    font-family: var(--title-family);
  }

  h3,
  .title-medium {
    display: block;
    width: 100%;
    max-width: 100%;
    color: var(--title-color-primary);
    font-size: var(--font-medium);
    font-family: var(--title-family);
  }

  h4,
  .title-small {
    display: block;
    width: 100%;
    max-width: 100%;
    color: var(--title-color-primary);
    font-size: var(--font-small);
    font-family: var(--title-family);
  }

  p,
  .text {
    display: block;
    width: 100%;
    color: var(--text-color-primary);
    font-size: var(--font-mini);
  }

  small {
    font-size: 100%;
  }

  a {
    color: var(--color-blue);
    font-size: var(--font-mini);
    line-height: 32px;

    &:hover {
      color: var(--color-blue-dark);
    }
  }
`;
