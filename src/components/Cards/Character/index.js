import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Card, Title, Description } from './styles';

function CardCharacter({ character }) {
  function coverResolve() {
    return character.thumbnail.path ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
      ? `${character.thumbnail.path}.${character.thumbnail.extension}`
      : `${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`;
  }

  return (
    <Card cover={coverResolve()}>
      <Title>{character.name}</Title>
      <Description>{character.description}</Description>
    </Card>
  );
}

CardCharacter.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(CardCharacter);
