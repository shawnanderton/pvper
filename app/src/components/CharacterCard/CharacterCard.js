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
    <Grid container spacing={2} >
      <Grid item>
        <ClassIcon characterClass={characterClass} size={iconSize} />
      </Grid>
      <Grid item>
        <CharacterDetail
          name={name}
          title={title}
          itemLevel={itemLevel}
          race={race}
          guild={guild}
          characterClass={characterClass}
          realm={realm}
        />
      </Grid>
    </Grid>
  );
}

export default CharacterCard;
