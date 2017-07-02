import React from 'react-redux';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo, cancelTodo } from '../actions';
import TodoListComponent from '../components/TodoListComponent';
import getTodosSelector from '../selectors/selectors.js'
import _ from 'underscore';

const mapStateToProps = state => ({

  todos: getTodosSelector(state),

});

const VisibleTodoList = connect(
  mapStateToProps,
  null,
)(TodoListComponent);

export default VisibleTodoList;
