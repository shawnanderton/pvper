import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '../Icon';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

const classes = [
  'death knight',
  'demon hunter',
  'druid',
  'hunter',
  'mage',
  'monk',
  'paladin',
  'priest',
  'rogue',
  'shaman',
  'warlock',
  'warrior',
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ClassDropdown() {
  const styles = useStyles();
  const [selectedItem, setSelectedItem] = React.useState(classes);

  function handleChange(event) {
    const { value } = event.target;
    const selected = [];
    for (let i = 0, l = value.length; i < l; i += 1) {
      if (value[i].selected) {
        selected.push(value[i].value);
      }
    }
    setSelectedItem(value);
  }

  return (
    <FormControl variant="outlined" className={styles.formControl}>
      <InputLabel>Classes</InputLabel>
      <Select
        multiple
        value={selectedItem}
        onChange={handleChange}
        renderValue={(selected) => (
          <Grid container direction="row" spacing={0}>
            {selected.map((c, i) => (
              <Grid key={i} item xs={2}>
                <Icon name={c} size={24} />
              </Grid>
            ))}
          </Grid>
        )}
      >
        {classes.map((c, i) => (
          <MenuItem key={i} value={c}>
            <ListItemIcon>
              <Icon name={c} size={32} />
            </ListItemIcon>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
