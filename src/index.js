import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import $ from 'jquery';

import './style.css';
import './assets/css/lib.min.css';
import './assets/css/font-awesome.min.css';
import sagas from './side-effects';
import reducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

window.$ = $;

/* eslint-disable no-underscore-dangle */
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers),
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)),
);
/* eslint-enable */

sagaMiddleware.run(sagas);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
