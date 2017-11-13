import Constants from '../constants/ActionTypes';
import * as api from '../utils/index';

const {
  FOLLOWING_REQUEST,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE
} = Constants;

//following actions
export const requestFavourite = (group) => ({
  type: FOLLOWING_REQUEST,
  group
});

export const receiveFavourite = (group, data) => ({
  type: FOLLOWING_SUCCESS,
  group,
  items: data,
  receivedAt: Date.now()
});

export const errorFavourite = () => ({
  type: FOLLOWING_FAILURE
});

export const fetchFavourites = (group) => {
  return dispatch => {
    dispatch(requestFavourite(group));
    return api.getFavouriteList()
      .then(res => {
        dispatch(receiveFavourite(group, JSON.parse(res.text)))
      })
      .catch(err => {
        dispatch(errorFavourite())
      })
  }
};
