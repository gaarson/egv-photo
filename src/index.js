import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import $ from 'jquery';

import './style.css';
import './assets/css/lib.min.css';
import './assets/css/font-awesome.min.css';
import sagas from './side-effects';
import reducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

window.$ = $;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
