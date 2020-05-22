import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.div`
  display: inline-block;
  width: 100%;
  margin: 8px 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 66.67%;
    position: relative;
    background: ${(props) =>
      `url('${props.cover}') no-repeat #000` || 'palevioletred'};
    background-size: cover;
    background-position: bottom;
  }
`;

export const Title = styled.h3`
  padding: 0 8px;
  margin-bottom: 0;
  white-space: nowrap;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled.p`
  height: 80px;
  margin: 8px 0;
  padding: 0 8px;
  line-height: 1.4;
  overflow: hidden;
`;
