import React, { Component, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import { HeaderBar, RightSideBar } from './components';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <>
        <HeaderBar />
        <section className="container is-fluid">
          <div className="columns">
            <main className="column is-10">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/" component={Home} />
                </Switch>
              </Suspense>
            </main>
            <aside className="column is-2">
            <RightSideBar />
            </aside>
          </div>
        </section>
      </>
    );
  }
}

export default App;
