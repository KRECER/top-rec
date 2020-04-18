import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

export const store = createStore(
  reducer,
  {},
  composeWithDevTools(compose(
    applyMiddleware(thunk, logger),
  )),
);
