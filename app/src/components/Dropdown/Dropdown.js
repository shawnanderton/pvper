import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';

import Icon from '../Icon';
import './Dropdown.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

function Dropdown({ onChange, label, items = [], selectedItems = [], imageType }) {
  const styles = useStyles();

  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, items: value });
  }

  return (
    <FormControl className="dropdown">
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        name={label.toLowerCase()}
        value={selectedItems}
        onChange={handleChange}
        renderValue={(selected) => (
          <div className="label">
            {selected.map((c, i) => (
              <div key={i}>
                <Icon name={c} size={24} />
              </div>
            ))}
          </div>
        )}
      >
        {items.map((c, i) => (
          <MenuItem key={i} value={c}>
            <ListItemIcon>
              <Icon name={c} size={32} imageType={imageType} />
            </ListItemIcon>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array,
};

export default Dropdown;
