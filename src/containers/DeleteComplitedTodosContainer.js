import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteComplited } from '../actions';
import DeleteComplitedTodosComponent from '../components/DeleteComplitedTodosComponent.js';
import _ from 'underscore';

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteComplited,
}, dispatch);

const DeleteComplitedTodosContainer = connect(
  null,
  mapDispatchToProps,
)(DeleteComplitedTodosComponent);

export default DeleteComplitedTodosContainer;
