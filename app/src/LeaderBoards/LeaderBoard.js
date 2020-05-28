import React from 'react';
import ClassIcon from '../components/ClassIcon/ClassIcon';
import ArenaProgress from '../components/ArenaProgress/ArenaProgress';

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
            <th className="has-text-centered rank">Rank</th>
            <th className="has-text-centered">Name</th>
            <th className="has-text-centered">wins/lost</th>
            <th className="has-text-centered">Rating</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.rank}>
              <td className="has-text-centered rank">{entry.rank}</td>
              <td className="name">
                <div className="columns">
                  <ClassIcon
                    characterClass={entry.character.character_class.name}
                    size="64"
                  />

                  <div className="column">
                    <div>{entry.character.equipped_item_level} ILVL</div>
          <span>{entry.character.race.name}{' '}</span>
                    <span
                      className={`color-${entry.character.character_class.name.toLowerCase()}`}
                    >
                      {entry.character.name}{' '}
                    </span>

                    <span>From {entry.character.realm.name} </span>
                    <div> </div>
                  </div>
                </div>
              </td>
              <td className="arena-progress">
                <ArenaProgress
                  won={entry.season_match_statistics.won}
                  lost={entry.season_match_statistics.lost}
                  played={entry.season_match_statistics.played}
                />
              </td>
              <td className="rating is-capitalized has-text-weight-bold has-text-centered">
                {entry.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
