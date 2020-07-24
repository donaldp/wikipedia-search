import React from 'react';
import './resources/sass/app.scss';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SearchComponent from './components/SearchComponet';
import StateComponent from './components/StateComponent';
import ArticleComponent from './components/ArticleComponent';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <StateComponent>
        <Switch>
          <Route exact path='/' component={SearchComponent} />
          <Route exact path='/article/:page' component={ArticleComponent} />
        </Switch>
      </StateComponent>
    </Router>
  );
}

export default App;
