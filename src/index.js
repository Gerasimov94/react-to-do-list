import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import logger from 'redux-logger';
import Router from './router/router';

const store = createStore(reducer, applyMiddleware(logger));

export default render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
