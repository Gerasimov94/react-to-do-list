import { createAction } from 'redux-actions';
import { ADD_TODO, SET_VISIBILITY_FILTER, SET_PRIORITY_FILTER, SET_TEXT_FILTER, TOGGLE_TODO, CANCEL_TODO,
        DELETE_TODO, UPDATE_TODO, UPDATE_PRIORITY, DELETE_COMPLITED,ADD_COMPLITED } from '../constants/constants.js';

export const toggleTodo = createAction(
    TOGGLE_TODO,
  id => ({ id }),
);

let initialTodoId = 0;
export const addTodo = createAction(
  ADD_TODO,

  (text, id) => ({ text, id: initialTodoId++ }),
);

export const setVisibilityFilter = createAction(
  SET_VISIBILITY_FILTER,
  filter => ({ filter }),
);

export const setTextFilter = createAction(
  SET_TEXT_FILTER,
  filter => ({ filter }),
);

export const setPriorityFilter = createAction(
  SET_PRIORITY_FILTER,
  filter => ({ filter }),
);

export const cancelTodo = createAction(
  CANCEL_TODO,
  id => ({ id }),
);


export const deleteTodo = createAction(
  DELETE_TODO,
  id => ({ id }),
);

export const updateTodo = createAction(
  UPDATE_TODO,

  (id, text) => ({ id, text }),
);

export const updatePriority = createAction(
  UPDATE_PRIORITY,
  (id, priority) => ({ id, priority }),
  );

export const deleteComplited = createAction(
  DELETE_COMPLITED,
  );


