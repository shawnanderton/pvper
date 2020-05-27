import React from 'react';

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
                  <div
                    className= {`colunm icon icon-size-64 icon-${entry.character.character_class.name.toLowerCase()}`}
                  ></div>

                  <div className="column">
                  Name: <span className={`color-${entry.character.character_class.name.toLowerCase()}`}> {entry.character.name}</span>
                    <div>Realm: {entry.character.realm.name}</div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <span className="tag is-success">
                    {entry.season_match_statistics.won}
                  </span>
                  /
                  <span className="tag is-danger">
                    {entry.season_match_statistics.lost}
                  </span>
                  <span className="tag is-light is-pulled-right">
                    {entry.season_match_statistics.played}
                  </span>
                </div>
                <progress
                  className="progress is-success"
                  value={entry.season_match_statistics.won}
                  max={entry.season_match_statistics.played}
                >
                  15%
                </progress>
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
