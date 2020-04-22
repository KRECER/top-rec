import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/';

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(compose(
    applyMiddleware(thunk, logger),
  )),
);
