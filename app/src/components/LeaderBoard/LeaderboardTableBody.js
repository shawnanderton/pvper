import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

import ArenaProgress from '../ArenaProgress';
import CharacterCard from '../CharacterCard';

function LeaderboadTableBody({ entries, bracket }) {
  return (
    <TableBody>
      {entries.map((entry, index) => (
        <TableRow size="small" key={index}>
          <TableCell align="center">{entry[bracket].rank}</TableCell>
          <TableCell size="small" className="name">
            <CharacterCard
              name={entry.name}
              title={entry.title}
              race={entry.race.name}
              realm={entry.realm.name}
              guild={entry.guild ? entry.guild.name : 'not in guild'}
              characterClass={
                entry.characterClass.name ? entry.characterClass.name : ''
              }
              itemLevel={entry.itemLevel}
              iconSize={32}
            />
          </TableCell>
          <TableCell size="small" className="arena-progress">
            <ArenaProgress
              won={entry[bracket].won}
              lost={entry[bracket].lost}
              played={entry[bracket].played}
            />
          </TableCell>
          <TableCell
            size="small"
            className="rating is-capitalized has-text-weight-bold has-text-centered"
          >
            {entry[bracket].rating}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default LeaderboadTableBody;
