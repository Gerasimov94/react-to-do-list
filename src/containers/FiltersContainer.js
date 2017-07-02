import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTextFilter, setPriorityFilter } from '../actions';
import FilterTodoComponent from '../components/FilterTodoComponent.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  setTextFilter,
  setPriorityFilter,
}, dispatch);


const FiltersContainer = connect(
  null,
  mapDispatchToProps,
)(FilterTodoComponent);

export default FiltersContainer;
