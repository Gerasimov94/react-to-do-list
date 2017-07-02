import React from 'react';
import { connect } from 'react-redux';

export default class AddTodoComponent extends React.Component{ 

state = {inputValue: ''}

onsubmitHandler = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.inputValue)
        this.setState({inputValue : ''})
      }

inputUpdate = (e) => {
  this.setState({inputValue : e.target.value})
}      

render(){

  let input;

  return (
    <div>
      <form onSubmit={this.onsubmitHandler}
      >
        <input
          id="todo-input" value={this.state.inputValue} onChange = {this.inputUpdate}
        />
        <button type="submit">
          Добавить задачу
        </button>
      </form>
    </div>
  );
  }
};

