import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.png';

const useStyles = makeStyles({
  logo: {
    maxWidth: 250,
  },
});

export default function HeaderBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}
