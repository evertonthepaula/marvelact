import React from 'react';

import { Empty } from 'antd';

import Info from './styles';

import shield from '../../assets/img/shield-logo-white.png';

export default function EmptyResult() {
  return (
    <Empty
      image={shield}
      imageStyle={{
        height: 60,
      }}
      description={
        <Info>Nenhum Resultado encontrado nos arquivos da S.H.I.E.L.D.</Info>
      }
    />
  );
}
