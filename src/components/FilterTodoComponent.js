import React from 'react';
import { connect } from 'react-redux';
import { setFilter, updatePriority } from '../actions';

export default class FilterTodoComponent extends React.Component{
  
onChangeUpdateState = (e) => {
   this.props.setTextFilter(e.target.value);
}

onChangeUpdatePriorityValue = (e) => {
   this.props.setPriorityFilter(e.target.value)
}
 
  render() {
    
  return (<div>
    <input
      id="filter" onChange={this.onChangeUpdateState}
    />

    <select onChange={this.onChangeUpdatePriorityValue}>
      <optgroup label="Приоритет" >
        <option value="0" >Все</option>
        <option value="1" >Высокий</option>
        <option value="2" >Средний</option>
        <option value="3" >Низкий</option>
      </optgroup>
    </select>

  </div>)};

}