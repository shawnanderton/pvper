import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';

import './class-icon.scss';
import images from './images';

 function ClassIcon({ characterClass, size }) {
  const classSlug = characterClass.replace(/\s/g, '').toLowerCase();
  const styles = {
    width: size,
    height: size,
  };

  return (
    <Tooltip title={characterClass} placement="bottom">
      <ButtonBase>
        <img
          className="class-icon"
          src={images[`icon_${classSlug}`]}
          style={styles}
          alt={characterClass}
        />
      </ButtonBase>
    </Tooltip>
  );
}

ClassIcon.propTypes = {
  characterClass: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default ClassIcon;
