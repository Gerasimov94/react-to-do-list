import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import LinkComponent from '../components/LinkComponent';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setVisibilityFilter,
}, dispatch);


const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkComponent);

export default FilterLink;
