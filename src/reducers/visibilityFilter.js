import { handleActions } from 'redux-actions';
import { SHOW_ALL, SET_VISIBILITY_FILTER, SET_FILTER } from '../constants/constants.js';

const initialState = SHOW_ALL;

export default handleActions({
  [SET_VISIBILITY_FILTER]: (state, { payload: { filter } }) => filter,
  [SET_FILTER]: (state, { payload: { filter } }) => filter,
}, initialState);

