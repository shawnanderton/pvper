import React from 'react';
import PropTypes from 'prop-types';

import './class-icon.scss';

function ClassIcon({ characterClass, size }) {
  console.log('characterClass', characterClass);
  const classSlug = characterClass.replace(/\s/g, '').toLowerCase();
  const iconClass = `icon-${classSlug}`;

  const styles = {
    width: size,
    height: size,
    backgroundSize: size,
  };

  return (
      <div className={`icon ${iconClass}`} style={styles}></div>
  );
}

ClassIcon.propTypes = {
  characterClass: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default ClassIcon;
