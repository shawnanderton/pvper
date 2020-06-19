import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';

import './icon.scss';
import images from './images';

 function Icon({ name, size }) {
  name = name.replace(/\s/g, '').toLowerCase();
  const styles = {
    width: size,
    height: size,
  };

  return (
    <Tooltip title={name} placement="bottom">
      <ButtonBase>
        <img
          className="icon"
          src={images[`${name}`]}
          style={styles}
          alt={name}
        />
      </ButtonBase>
    </Tooltip>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
