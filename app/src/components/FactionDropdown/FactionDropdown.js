import React from 'react';

function FactionDropdown() {
  const factions = ['horde', 'alliance'];

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
                <ClassIcon characterClass={c} size={24} />
              </Grid>
            ))}
          </Grid>
        )}
      >
        {factions.map((c, i) => (
          <MenuItem key={i} value={c}>
            <ListItemIcon>
              <ClassIcon characterClass={c} size={32} />
            </ListItemIcon>
            {c}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FactionDropdown;
