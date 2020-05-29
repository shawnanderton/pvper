import React from 'react';
import PropTypes from 'prop-types';

import './arena-progress.scss';

function ArenaProgress({ won, lost, played }) {
  const percentage = Math.round((won / played) * 100);
  const styles = {
    progressBar: {
      width: percentage + '%',
    },
  };
  return (
    <>
      <span className="tag is-success">{won}</span>/
      <span className="tag is-danger">{lost}</span>
      <span className="tag is-light is-pulled-right">{played}</span>
      <div className="progress">
         <span className="percentage">{percentage}%</span>
        <div className="progress-bar" style={styles.progressBar}>
         
        </div>
      </div>
    </>
  );
}

ArenaProgress.propTypes = {
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  played: PropTypes.number.isRequired,
};

export default ArenaProgress;
