import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';
import Card from '../../components/Cards/Character';
import EmptyResult from '../../components/EmptyResult';
import Loading from '../../components/Loading';
import SearchCharacter from '../../components/SearchCharacter';
import BtnUpdate from '../../components/BtnUpdate';

import { Container, UpdateBox } from './styles';

export default function Dashboard() {
  const load = useSelector((state) => state.characters.loading);
  const characters = useSelector((state) => state.characters.characters);

  return (
    <Container>
      <SearchCharacter />

      {load && <Loading />}

      {!load && characters.length === 0 && <EmptyResult />}

      {!load && (
        <Row gutter={16}>
          {characters.map((item) => (
            <Col key={item.id} span={6}>
              <Link to={`/character/${item.id}`}>
                <Card character={item} />
              </Link>

              <UpdateBox>
                <BtnUpdate character={item} />
              </UpdateBox>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
