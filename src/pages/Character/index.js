import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ServiceComics from '../../services/marvel/comics';
import ServiceSeries from '../../services/marvel/series';

import Loading from '../../components/Loading';

import {
  ContentBox,
  Wrapper,
  Banner,
  Magazine,
  Content,
  Title,
  SubTitle,
  Description,
  ArrowDown,
  MagazineInfo,
} from './styles';

import { charactersFind } from '../../store/modules/characters/actions';

function Character({
  match: {
    params: { id },
  },
}) {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.character);

  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(charactersFind(Number(id)));

    async function loadContent() {
      const seriesRes = await ServiceSeries.get({ characters: id });
      setSeries(seriesRes.data.results);

      const comicsRes = await ServiceComics.get({ characters: id });
      setComics(comicsRes.data.results);

      setLoad(false);
    }

    loadContent();
  }, [id, dispatch]);

  return (
    <>
      {character && (
        <Banner
          img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        >
          <Title>{character.name}</Title>
          <Description>{character.description}</Description>
          <ArrowDown
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth',
              })
            }
          />
        </Banner>
      )}

      {load && <Loading />}

      {!load && (
        <ContentBox>
          {series && (
            <Wrapper>
              <SubTitle>Séries:</SubTitle>
              {series.map((item) => (
                <Content key={item.id}>
                  <Magazine>
                    <img
                      alt={item.title}
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    />
                  </Magazine>

                  <MagazineInfo>
                    <h3>{item.title}</h3>
                    <h4>Descrição</h4>
                    <p>{item.description}</p>
                  </MagazineInfo>
                </Content>
              ))}
            </Wrapper>
          )}
          {comics && (
            <Wrapper>
              <SubTitle>Histórias em Quadrinhos:</SubTitle>
              {comics.map((item) => (
                <Content key={item.id}>
                  <Magazine>
                    <img
                      alt={item.title}
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    />
                  </Magazine>

                  <MagazineInfo>
                    <h3>{item.title}</h3>
                    <h4>Descrição</h4>
                    <p>{item.description}</p>
                  </MagazineInfo>
                </Content>
              ))}
            </Wrapper>
          )}
        </ContentBox>
      )}
    </>
  );
}

Character.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Character;
