import React from 'react';
import { connect } from 'react-redux';

export default class DeleteComplitedTodosComponent extends React.Component{ 

onDeleteComplited = () => {
  console.log(this.props)
  this.props.deleteComplited()
}      

render(){

  return (
    <button onClick={this.onDeleteComplited} >Удалить завершенные</button>
  );

  }
};
