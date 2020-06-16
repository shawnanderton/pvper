import React from 'react';
import ClassIcon from '../ClassIcon';

export default function ClassFilter() {
  const classes = [
    'deathknight',
    'demonhunter',
    'druid',
    'hunter',
    'mage',
    'monk',
    'paladin',
    'priest',
    'rogue',
    'shaman',
    'warlock',
    'warrior',
  ];

  return (
    <div>
      {classes.map((c) => (
        <ClassIcon characterClass={c} size={32} />
      ))}
    </div>
  );
}
