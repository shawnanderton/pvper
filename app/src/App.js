import React, { Component, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import {Route, Switch } from 'react-router-dom';
import { HeaderBar } from './components';
import Home from './Home/Home';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
