import { handleActions } from 'redux-actions';
import { SET_PRIORITY_FILTER } from '../constants/constants.js';

const initialState = 0;

export default handleActions({
  [SET_PRIORITY_FILTER]: (state, { payload: { filter } }) => Number(filter),
},
initialState);

