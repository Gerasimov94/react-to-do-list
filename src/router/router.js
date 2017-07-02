import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from '../components/App';
import StartPageComponent from '../components/StartPageComponent';

const history = createBrowserHistory();

const Router = () => (
  <BrowserRouter history={history} >
    <div>
      <Route exact path="/" component={StartPageComponent} />
      <Route path="/todolist" component={App} />
    </div>
  </BrowserRouter>
);

export default Router;
