import React from 'react';
import PropTypes from 'prop-types'
import TodoContainer from '../containers/TodoContainer';

export default class TodoListComponent extends React.PureComponent {

static propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo =>
          (<TodoContainer
            key={todo.id}
            {...todo}
          />),
        )}
      </ul>
    );
  }


}

