import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import RadioIconButtonGroup from '../RadioIconButtonGroup';

function LeaderboardSearch({ onChange, selectedClasses, selectedFractions }) {
  const [factions, setFactions] = useState([
    { key: 1, selected: true, icon: { name: 'horde', size: 24 } },
    { key: 2, selected: true, icon: { name: 'alliance', size: 24 } },
  ]);
  const [classes, setClasses] = useState([
    { key: 1, selected: true, icon: { name: 'death knight', size: 24 } },
    { key: 2, selected: true, icon: { name: 'demon hunter', size: 24 } },
    { key: 3, selected: true, icon: { name: 'druid', size: 24 } },
    { key: 4, selected: true, icon: { name: 'hunter', size: 24 } },
    { key: 5, selected: true, icon: { name: 'mage', size: 24 } },
    { key: 6, selected: true, icon: { name: 'monk', size: 24 } },
    { key: 7, selected: true, icon: { name: 'paladin', size: 24 } },
    { key: 8, selected: true, icon: { name: 'priest', size: 24 } },
    { key: 9, selected: true, icon: { name: 'rogue', size: 24 } },
    { key: 10, selected: true, icon: { name: 'shaman', size: 24 } },
    { key: 11, selected: true, icon: { name: 'warlock', size: 24 } },
    { key: 12, selected: true, icon: { name: 'warrior', size: 24 } },
  ]);

  useEffect(() => {
    setClasses(classes.map((c) => {
      return {...c, selected: selectedClasses.includes(c.icon.name )}}));

  },[selectedClasses]);

  useEffect(() => {
    setFactions(factions.map((c) => {;
      return {...c, selected: selectedFractions.includes(c.icon.name )}}));

  },[selectedFractions]);

  function handleFactionsChange(items) {
    onChange({name: 'factions', items: items.filter(i => i.selected).map((i => i.icon.name))})
  }

  function handleClassesChange(items) {
    onChange({name: 'classes', items: items.filter(i => i.selected).map((i => i.icon.name))})
  }

  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={1}>
        <RadioIconButtonGroup
          label="Factions"
          onChange={handleFactionsChange}
          items={factions}
        />
      </Grid>
      <Grid item xs={3}>
        <RadioIconButtonGroup
          label="Classes"
          onChange={handleClassesChange}
          items={classes}
        />
      </Grid>
    </Grid>
  );
}

export default LeaderboardSearch;
