import {combineReducers} from 'redux'
import Constants from '../constants/ActionTypes';

const {
  FOLLOWING_REQUEST,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE
} = Constants;

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

function twitts(state = {
  isFetching: false,
  didInvalidate: false,
  isError: false,
  lastUpdated: null,
  items: []
}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favourite,
  twitts
});

export default rootReducer;