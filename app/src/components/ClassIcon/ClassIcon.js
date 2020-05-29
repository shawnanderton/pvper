import React from 'react';
import PropTypes from 'prop-types';

import './class-icon.scss';

function ClassIcon({ characterClass, size }) {
  const classSlug = characterClass.replace(/\s/g, '').toLowerCase();
  const iconClass = `icon-${classSlug}`;

  const styles= {
    width: size,
    height: size,
    backgroundSize:size
  }

  return (
    <div>
      <div className={`icon ${iconClass}`} style={styles}></div>
    </div>
  );
}

ClassIcon.propTypes = {
  characterClass: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ClassIcon;
