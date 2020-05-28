import React from 'react';
import PropTypes from 'prop-types';

import './class-icon.scss';

function ClassIcon({ characterClass, size }) {
  const iconClass = `icon-${characterClass.toLowerCase()}`;
  const iconSize = `icon-size-${size}`;

  return (
    <div>
      <div className={`icon ${iconClass} ${iconSize}`}></div>
    </div>
  );
}

ClassIcon.propTypes = {
  characterClass: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ClassIcon;
