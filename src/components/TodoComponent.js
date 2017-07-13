import React from 'react'
import PropTypes from 'prop-types'
import UpdateTodoContainer from '../containers/UpdateTodoContainer.js'

export default class Todo extends React.Component {
  
  static propTypes = {
          toggleTodo: PropTypes.func.isRequired,
          deleteTodo: PropTypes.func.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
    };      
  
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      isCanseled: false,
    }
  }

  setUpdate = () => {
    this.setState({ isEdit: true })
  }

  setCancel = () => {
    this.setState({ isEdit: false })
  }

  setSelectChange = () => {
    this.setState({ isEdit: false })
  }

  setPriorityColor = (priority) => {
    switch (Number(priority)) {
      case 1:
        return {color : 'red'}
      case 2:
        return {color : 'orange'}
      case 3:
        return {color : 'green'}
      default:
        return
        
    }
  }

  todoHandler = () => {
    this.props.toggleTodo(this.props.id)
  }

  deleteHandler = () => {
    this.props.deleteTodo(this.props.id)
  }

  render() {
    
    if (this.state.isEdit !== true) {
      return (
        <div id="todos-block" style = {this.setPriorityColor(this.props.priority)}  >
          <input type="checkbox" onClick={this.todoHandler}>
          </input>
          <span className="todo" style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}>
            {this.props.text}
            
          </span>
          <button onClick={this.setUpdate}> Edit </button>
          <button onClick={this.deleteHandler}> Delete </button>

        </div>
      );
    } else {

      return <UpdateTodoContainer
        text={this.props.text}
        setUpdate={this.setUpdate}
        id={this.props.id}
        onCancelClick={this.props.cancelTodo}
        onUpdateClick={this.props.updateTodo}
        setCancel={this.setCancel}
      />
    }

  }
}

