import styled, { keyframes } from 'styled-components';

const grow = keyframes`
 to{
    transform: scale(1);
  }
`;

export const Container = styled.span`
  position: relative;
  display: inline-flex;
  justify-content: center;
  height: 8px;
  margin: 0 4px;
  width: 40px;
`;

export const Circle = styled.span`
  will-change: transform;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  transform: scale(0);
  animation: ${grow} 1s ease-in-out infinite alternate;
  animation-delay: 0.33s;

  &:first-of-type {
    left: 0px;
    animation-delay: 0s;
  }
  &:last-of-type {
    right: 0;
    animation-delay: 0.66s;
  }
`;
