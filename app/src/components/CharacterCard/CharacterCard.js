import React from 'react';
import CharacterDetail from './CharacterDetail';

import Icon from '../Icon';

import './character-card.scss';

function CharacterCard({
  name,
  title,
  race,
  realm,
  guild,
  characterClass,
  itemLevel,
  iconSize,
}) {
  return (
    <div className="character-card">
        <Icon name={characterClass} size={iconSize} />
        <CharacterDetail
          name={name}
          title={title}
          itemLevel={itemLevel}
          race={race}
          guild={guild}
          characterClass={characterClass}
          realm={realm}
        />
    </div>
  );
}

export default CharacterCard;
