import styled, { keyframes } from 'styled-components';

import { FaAngleDoubleDown } from 'react-icons/fa';

import wallpaper from '../../assets/img/marvel-background.png';

export const Banner = styled.header`
  height: 100vh;
  position: relative;
  background: ${(props) => `url('${props.img}')` || ''},
    ${`url('${wallpaper}')`};
  background-size: auto 40vh, contain;
  background-position: center 1vh, left top;
  background-repeat: no-repeat, repeat;
  background-attachment: scroll, fixed;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 34vh auto 3vh;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  font-size: 3vh;
  color: #eee;
`;

export const SubTitle = styled.h2`
  width: 100%;
  color: var(--color-yellow);
`;

export const Description = styled.p`
  height: 40vh;
  overflow: auto;
  max-width: 1224px;
  margin: 0 auto;
  text-align: justify;
  background: rgba(0, 0, 0, 0.8);
  padding: 16px;
  font-size: 1.8rem;
  color: #eee;
`;

const arrow = keyframes`
  from {
    transform: translate(0,8px);
  }

  to {
    transform: translate(0,16px);
  }
`;

export const ArrowDown = styled(FaAngleDoubleDown)`
  display: block;
  margin: 0 auto;
  font-size: 6rem;
  color: #fff;
  border: 6px solid #fff;
  border-radius: 50%;
  padding: 12px;
  background: #2688d7;
  box-shadow: 0px 0px 0px 6px inset #d51b1d, 0 0 0 6px #d51b1d;
  animation: 0.6s linear 0s infinite alternate ${arrow};
  cursor: pointer;
`;

export const ContentBox = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 8px;
  background: radial-gradient(
    circle,
    rgb(116, 15, 45) 49%,
    rgb(178, 52, 38) 100%
  );
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1240px;
  padding: 8px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
  margin: 0 0 16px;
  border: 2px solid white;
`;

export const Magazine = styled.div`
  flex: 1 1 300px;

  img {
    border: 2px solid white;
    margin: 8px 0;
  }
`;

export const MagazineInfo = styled.div`
  flex: 1 0 50%;
  display: inline-block;
  padding: 0 8px;

  h3,
  h4,
  p {
    color: #fff;
  }
`;
