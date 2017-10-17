import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import './style.css';
import sagas from './side-effects';
import reducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

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
