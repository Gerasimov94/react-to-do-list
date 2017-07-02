import React from 'react'
import PropTypes from 'prop-types'


export default class UpdateTodoComponent extends React.Component {

static propTypes = {
  setCancel: PropTypes.func.isRequired,
  updatePriority: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired, 
};

 onSubmitForm = (e) => {
  e.preventDefault()
        if (!this.input.value.trim()) {
          return
        }
 
        this.props.setCancel()
        this.input.value = ''   
 }

 onUpdateBtnClick = (e) => {
   this.props.updateTodo(this.props.id,this.input.value)
   this.props.updatePriority(this.props.id,this.sel.value)
 }

 onSelectClick = (e) => {
  this.selected = e.target.faf
    }

  render(){
  
  let input,sel

  return (
    
    <div>
      <form onSubmit={this.onSubmitForm}>
        <input defaultValue ={ this.props.text} ref={node => {
          this.input = node
        }} />
        <button onClick={this.onUpdateBtnClick}>
          Обновить
        </button>
        <select ref={node => {this.sel = node}} >
          <optgroup label='Приоритет'>
            <option value="1"  >Высокий</option>
            <option value="2"  >Средний</option>
            <option value="3"  >Низкий</option> 
          </optgroup>
        </select>
        <button onClick={ this.props.setCancel}>
          Отменить 
        </button>
      </form>
    </div>
  )
}
}



