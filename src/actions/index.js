import Constants from '../constants/ActionTypes';
import * as api from '../utils/index';

const {
  FOLLOWING_REQUEST,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE
} = Constants;

//following actions
export const requestFavourite = () => ({
  type: FOLLOWING_REQUEST,
});

//favourite actions
export const receiveFavourite = (groupID, data) => ({
  type: FOLLOWING_SUCCESS,
  groupID,
  items: data,
  receivedAt: Date.now()
});

export const errorFavourite = () => ({
  type: FOLLOWING_FAILURE
});

export const fetchFavourites = (groupID) => {
  return dispatch => {
    dispatch(requestFavourite(groupID));
    return api.getFavouriteList()
      .then(res => {
        dispatch(receiveFavourite(groupID, JSON.parse(res.text)))
      })
      .catch(err => {
        dispatch(errorFavourite())
      })
  }
};

//timeline actions
const {
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE
} = Constants;

//following actions
export const requestTimeline = () => ({
  type: TIMELINE_REQUEST,
});

//favourite actions
export const receiveTimeline = (lastID, data) => ({
  type: TIMELINE_SUCCESS,
  lastID,
  items: data,
  receivedAt: Date.now()
});

export const errorTimeline = () => ({
  type: TIMELINE_FAILURE
});

export const fetchTimeline = (lastID) => {
  return dispatch => {
    dispatch(requestTimeline());
    return api.getTimelineTweets(lastID)
      .then(res => {
        dispatch(receiveTimeline(lastID, JSON.parse(res.text)))
      })
      .catch(err => {
        dispatch(errorTimeline())
      })
  }
};