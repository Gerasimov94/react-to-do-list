import { handleActions } from 'redux-actions';
import { SET_TEXT_FILTER, SET_PRIORITY_FILTER } from '../constants/constants.js';

const initialState = '';

export default handleActions({
  [SET_TEXT_FILTER]: (state, { payload: { filter } }) => filter,
},
initialState);

