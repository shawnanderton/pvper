import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';

import './class-icon.scss';

const images = require.context('./images', true);
function ClassIcon({ characterClass, size }) {
  const classSlug = characterClass.replace(/\s/g, '').toLowerCase();
  let img_src = images(`./classicon_${classSlug}.jpg`);
  const styles = {
    width: size,
    height: size,
  };

  return (
    <Tooltip title={characterClass} placement="bottom">
      <ButtonBase>
        <img
          className="class-icon"
          src={img_src}
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
