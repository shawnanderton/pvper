import React from 'react';
import CharacterDetail from './CharacterDetail';
import { Grid } from '@material-ui/core';

import ClassIcon from '../ClassIcon';

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
        <ClassIcon characterClass={characterClass} size={iconSize} />
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
