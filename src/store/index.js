import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import reducer from '../reducers';

//loggers
const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initState = {
  favourite: {
    isFetching: false,
    isError: false,
    didInvalidate: false,
    lastUpdated: null,
    items: []
  },
  tweets: {
    isFetching: false,
    isError: false,
    didInvalidate: false,
    lastUpdated: null,
    lastID: null,
    items: []
  }
};
const store = createStore(
  reducer,
  initState,
  composeEnhancers(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))
);

export default store;