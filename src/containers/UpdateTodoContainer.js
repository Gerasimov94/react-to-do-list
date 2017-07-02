import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTodo, updatePriority } from '../actions';
import UpdateTodoComponent from '../components/UpdateTodoComponent.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTodo,
  updatePriority,
}, dispatch);

const UpdateTodoContainer = connect(
  null,
  mapDispatchToProps,
)(UpdateTodoComponent);

export default UpdateTodoContainer
;
