import React from 'react';
import ArenaProgress from '../components/ArenaProgress';
import CharacterCard  from '../components/CharacterCard';

function LeaderBoard({ entries, history, errorMessage }) {
  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {(!entries || !entries.length) && !errorMessage && (
        <div>Loading data ...</div>
      )}
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th className="has-text-centered">Rank</th>
            <th className="has-text-centered">Name</th>
            <th className="has-text-centered">wins/lost</th>
            <th className="has-text-centered">Rating</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry['ARENA_2v2'].rank}>
              <td className="rank">
                {entry['ARENA_2v2'].rank}
              </td>
              <td className="name">
                <div className="columns">
                  <CharacterCard
                    name={entry.name}
                    title={entry.title}
                    race={entry.race.name}
                    realm={entry.realm.name}
                    guild={entry.guild ? entry.guild.name : 'not in guild'}
                    characterClass={entry.characterClass.name}
                    itemLevel={entry.itemLevel}
                    iconSize={42}
                  />
                </div>
              </td>
              <td className="arena-progress">
                <ArenaProgress
                  won={entry['ARENA_2v2'].won}
                  lost={entry['ARENA_2v2'].lost}
                  played={entry['ARENA_2v2'].played}
                />
              </td>
              <td className="rating is-capitalized has-text-weight-bold has-text-centered">
                {entry['ARENA_2v2'].rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
