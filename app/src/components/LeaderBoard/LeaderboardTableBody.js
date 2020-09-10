import React from 'react';

import ArenaProgress from '../ArenaProgress';
import CharacterCard from '../CharacterCard';

function LeaderboardTableBody({ entries, bracket }) {
  return (
    <tbody>
      {entries.map((entry, index) => (
        <tr size="small" key={index}>
          <td align="center">{entry[bracket].rank}</td>
          <td size="small" className="name">
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
          </td>
          <td size="small" className="arena-progress">
            <ArenaProgress
              won={entry[bracket].won}
              lost={entry[bracket].lost}
              played={entry[bracket].played}
            />
          </td>
          <td
            size="small"
            className="rating is-capitalized has-text-weight-bold has-text-centered"
          >
            {entry[bracket].rating}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default LeaderboardTableBody;
