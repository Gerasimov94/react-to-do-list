import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, deleteTodo, updateTodo, cancelTodo } from '../actions';
import TodoComponent from '../components/TodoComponent.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleTodo,
  deleteTodo,
  updateTodo,
  cancelTodo,
}, dispatch);


const TodoContainer = connect(
  null,
  mapDispatchToProps,
)(TodoComponent);

export default TodoContainer;
