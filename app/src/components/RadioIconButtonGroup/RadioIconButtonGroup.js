import React from 'react';
import RadioIconButton from '../RadioIconButton';

import './radio-icon-button-group.scss';

function RadioIconButtonGroup({ label, items, onChange }) {
  function handleChange(item) {
    const index = items.findIndex((i) => i.key === item.key);
    items[index].selected = item.selected;
    onChange(items);
  }

  function selectAll(event) {
    event.preventDefault();
    onChange(items.map((i) => ({ ...i, selected: true })));
  }

  return (
    <div className="radio-icon-button-group">
      <h4>{label}</h4>
      <div className="items-group">
        <div>
          <div className="items">
            {items.map((item) => (
              <div className="item">
                <RadioIconButton
                  onChange={handleChange}
                  key={item.key}
                  id={item.key}
                  selected={item.selected}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>

        <a href="#" onClick={selectAll} className="item-all">
          <strong>All</strong>
        </a>
      </div>
    </div>
  );
}

export default RadioIconButtonGroup;
