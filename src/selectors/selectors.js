import { createSelector } from 'reselect';
import _ from 'underscore';

export const getStateTodos = state => state.todos;
export const getVisibleTodosList = state => state.visibilityFilter;
export const getTextFilter = state => state.textfilterReducer;
export const getPriorityFilter = state => state.priorityfilterReducer;

export const getfilteredTodosList = (getStateTodos, getVisibleTodosList, getTextFilter, getPriorityFilter) =>
_.chain(getStateTodos)
.filter((t) => {
  switch (getVisibleTodosList) {
    case 'SHOW_ALL':
      return true;
    case 'SHOW_COMPLETED':
      return t.completed;
    case 'SHOW_ACTIVE':
      return !t.completed;
    default:
      true;
  }
})
  .filter(t => t.text.includes(getTextFilter))
  .filter((t) => t.priority == getPriorityFilter || getPriorityFilter == 0
  )
  .sortBy('priority')
  .value();
  

export default createSelector(
     getStateTodos,
     getVisibleTodosList,
     getTextFilter,
     getPriorityFilter,
     getfilteredTodosList,
  );

