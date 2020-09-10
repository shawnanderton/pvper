import React from 'react';
import PropTypes from 'prop-types';

import './icon.scss';
import images from './images';

function Icon({ name, size }) {
  name = name.replace(/\s/g, '').toLowerCase();
  const styles = {
    width: size,
    height: size,
  };

  return (
      <button>
        <img
          src={images[`${name}`]}
          style={styles}
          alt={name}
        />
      </button>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
