import React from 'react';

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
    <div className="character-detail">
      <div className="character-title">
        <div>{title}</div>
        <div className={`character-name ${classColor}`}>{name}</div>
      </div>
      <div className="character-info">
        <div className="character-item-level">{itemLevel} ILVL</div>
        <div className="character-info-text">
          <span>{level}</span>
          <span>{race}</span>
          <span>{spec}</span>
          <span>{characterClass}</span>
          <span>{`<${guild}>`}</span>
          <span> {realm}</span>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
