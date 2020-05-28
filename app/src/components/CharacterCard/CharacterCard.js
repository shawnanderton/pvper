import React from 'react';
import CharacterDetail from './CharacterDetail';

import ClassIcon from '../ClassIcon';

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
    <>
      <div className="class-icon">
        <ClassIcon characterClass={characterClass} size={iconSize} />
      </div>
      <div className="character-deatil">
        <CharacterDetail name={name} title={title} itemLevel={itemLevel} race={race} guild={guild} characterClass={characterClass} realm={realm} />
      </div>
    </>
  );
}

export default CharacterCard;
