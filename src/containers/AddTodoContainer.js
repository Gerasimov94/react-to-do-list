import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions';
import AddTodoComponent from '../components/AddTodoComponent.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo,
}, dispatch);


const AddTodoContainer = connect(
  null,
  mapDispatchToProps,
)(AddTodoComponent);

export default AddTodoContainer;
