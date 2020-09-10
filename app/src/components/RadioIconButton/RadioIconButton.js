import React, { useState } from 'react';

import Icon from '../Icon';

import './radioIconButton.scss';

function RadioIconButton({
  id,
  selected = false,
  icon = { name: '', size: 24 },
  onChange,
}) {
  const handleClick = () => {
      console.log(selected);
    onChange({ key: id, selected: !selected });
  };
  return (
    <button
      onClick={handleClick}
      className={`radio-icon-button ${selected ? 'selected' : ''}`}
    >
      <Icon name={icon.name} size={icon.size} />
    </button>
  );
}

export default RadioIconButton;
