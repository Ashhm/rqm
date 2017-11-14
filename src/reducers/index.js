import {combineReducers} from 'redux'
import Constants from '../constants/ActionTypes';

const {
  FOLLOWING_REQUEST,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE
} = Constants;

//favourite groups reducer
function favourite(state = {
  isFetching: false,
  didInvalidate: false,
  isError: false,
  lastUpdated: null,
  items: []
}, action) {
  switch (action.type) {
    case FOLLOWING_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        isError: false
      });
    case FOLLOWING_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        isError: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    case FOLLOWING_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        isError: true,
      });
    default:
      return state;
  }
}

const {
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE
} = Constants;

//timeline tweets reducer
function tweets(state = {
  isFetching: false,
  didInvalidate: false,
  isError: false,
  lastUpdated: null,
  lastID: null,
  items: []
}, action) {
  switch (action.type) {
    case TIMELINE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        isError: false
      });
    case TIMELINE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        isError: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    case TIMELINE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        isError: true,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favourite,
  tweets
});

export default rootReducer;