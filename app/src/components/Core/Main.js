import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Leaderboard, NotFound } from '../';

export default function Main() {
  return (
    <main className="section">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect from="/" exact to="/leaderboard" />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route exact path="**" component={NotFound} />
        </Switch>
      </Suspense>
    </main>
  );
}
