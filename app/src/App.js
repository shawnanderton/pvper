import React, { Suspense } from 'react';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import { HeaderBar, RightSideBar } from './components';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Leaderboards from './components/Leaderboards';
import Home from './Home/Home';

function App() {
  return (
    <>
      <HeaderBar />
      <Box m={2}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <Paper>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route path="/pvp/leaderboards/:bracket" component={Leaderboards} />
                    <Route path="/" component={Home} />
                  </Switch>
                </Suspense>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <RightSideBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
