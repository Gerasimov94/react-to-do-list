import { handleActions } from 'redux-actions';
import { ADD_TODO, TOGGLE_TODO, CANCEL_TODO,
        DELETE_TODO, UPDATE_TODO, UPDATE_PRIORITY, DELETE_COMPLITED } from '../constants/constants.js';

const initialState = [];

export default handleActions({
  [ADD_TODO]: (state, { payload: { id, text } }) => ([
    ...state,
    {
      id,
      text,
      completed: false,
      priority: 2,

    },
  ]),
  [TOGGLE_TODO]: (state, { payload: { id, completed } }) =>
      state.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo,
  ),
  [DELETE_TODO]: (state, { payload: { id } }) =>
      state.filter(todo =>
          todo.id !== id,
  ),
  [UPDATE_TODO]: (state, { payload: { id, text } }) =>
      state.map(todo => (todo.id === id)
          ? { ...todo, text }
          : todo,
  ),
  [UPDATE_PRIORITY]: (state, { payload: { id, priority } }) =>
      state.map(todo => (todo.id === id)
          ? { ...todo, priority }
          : todo,
  ),
  [CANCEL_TODO]: state => ({
    ...state,
  }),
  [DELETE_COMPLITED]: state =>
      state.filter(todo =>
          todo.completed === false
  ),
}, initialState);
