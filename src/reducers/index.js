import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import textfilterReducer from './textfilterReducer';
import priorityfilterReducer from './priorityfilterReducer';


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  textfilterReducer,
  priorityfilterReducer,
});

export default todoApp;
