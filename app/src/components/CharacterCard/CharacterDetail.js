import React from 'react';

import { Grid } from '@material-ui/core';

import './character-detail.scss';

function CharacterDetail({
  name,
  title,
  level,
  itemLevel,
  race,
  spec,
  characterClass,
  guild,
  realm,
}) {
  const classSlug = characterClass.replace(/\s/g, '').toLowerCase();

  const classColor = `color-${classSlug}`;
  return (
    <Grid container spacing={1}>
      <Grid item>
        <div>{title}</div>
        <div className={`character-name ${classColor}`}>{name}</div>
      </Grid>
      <Grid item>
        <div className="character-item-level">{itemLevel} ILVL</div>
        <div className="character-info-text">
          <span>{level}</span>
          <span>{race}</span>
          <span>{spec}</span>
          <span>{characterClass}</span>
          <span>{`<${guild}>`}</span>
          <span> {realm}</span>
        </div>
      </Grid>
    </Grid>
  );
}

export default CharacterDetail;
