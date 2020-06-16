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
    <>
      <div className="character">
        <div><span  className={`character-name ${classColor}`}>{name}</span> <span className="character-item-level">{itemLevel} ILVL</span></div>
        <div><small>(US) {realm}</small></div>
      </div>
    </>
  );
}

export default CharacterDetail;
