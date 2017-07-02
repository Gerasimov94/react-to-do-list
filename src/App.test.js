import React from 'react';
import ReactDOM from 'react-dom';
import { getfilteredTodosList } from './selectors/selectors';
import todosReducer from './reducers/todos';
import { addTodo, toggleTodo, deleteTodo, updateTodo, updatePriority, cancelTodo } from './actions/index';


describe('getfilteredTodosList', () => {
  test('empty array', () => {
    expect(getfilteredTodosList([], 'SHOW_ALL', '', 0)).toEqual([]);
  });

  test('default value', () => {
    expect(getfilteredTodosList([], 'SHOW_ALL', '', 2)).toEqual([]);
  });

  test('isn\'t comparable priority filters->expected low priority,received medium priority', () => {
    expect(getfilteredTodosList([{ id: 0, text: '123', completed: false, priority: 2 }], 'SHOW_ALL', '', 3)).toEqual([]);
  });

  test('runs without crashing', () => {
    expect(getfilteredTodosList([
    { id: 0, text: '123', completed: false, priority: 2 },
    { id: 1, text: '123', completed: true, priority: 2 },
    { id: 2, text: '123', completed: false, priority: 2 },
    { id: 3, text: '123', completed: true, priority: 2 },
    ], 'SHOW_COMPLETED', '', 0)).toEqual([
    { id: 1, text: '123', completed: true, priority: 2 },
    { id: 3, text: '123', completed: true, priority: 2 },
    ]);
  });

  test('priority test ', () => {
    expect(getfilteredTodosList([
    { id: 0, text: '123', completed: false, priority: 1 },
    { id: 1, text: '123', completed: true, priority: 2 },
    { id: 2, text: '123', completed: false, priority: 3 },
    { id: 3, text: '123', completed: true, priority: 2 },
    ], 'SHOW_ALL', '', 1)).toEqual([
    { id: 0, text: '123', completed: false, priority: 1 },
    ]);
  });

  test('text filter test', () => {
    expect(getfilteredTodosList([
    { id: 0, text: '11111', completed: false, priority: 1 },
    { id: 1, text: '121233', completed: true, priority: 2 },
    { id: 2, text: '12123133', completed: false, priority: 3 },
    { id: 3, text: '112312312323', completed: true, priority: 2 },
    ], 'SHOW_ALL', '11111', 1)).toEqual([
    { id: 0, text: '11111', completed: false, priority: 1 },
    ]);
  });
});

/*------------------------------------------------------------------------------------------------------------------------*/

describe('todosReducer', () => {
  test('testing add-todo action on reducer', () => {
    expect(todosReducer([], addTodo(''))).toEqual([
      { id: 0, text: '', completed: false, priority: 2 },
    ]);
  });

  test('toggled todo', () => {
    expect(todosReducer([{ id: 0, text: '', completed: false, priority: 2 }], toggleTodo(0))).toEqual([
      { id: 0, text: '', completed: true, priority: 2 },
    ]);
  });

  test('delete todo', () => {
    expect(todosReducer([{ id: 0, text: '', completed: false, priority: 2 }], deleteTodo(0))).toEqual([
    ]);
  });

  test('update todo', () => {
    expect(todosReducer([{ id: 0, text: '', completed: false, priority: 2 },{ id: 1, text: 'qweqweqwe', completed: false, priority: 1 }], updateTodo(1,'asfsafasf')))
    .toEqual([{ id: 0, text: '', completed: false, priority: 2 },{ id: 1, text: 'asfsafasf', completed: false, priority: 1 }]);
  });

    test('update priority', () => {
    expect(todosReducer([{ id: 0, text: '', completed: false, priority: 2 },{ id: 1, text: 'qweqweqwe', completed: false, priority: 1 }], updatePriority(1,3)))
    .toEqual([{ id: 0, text: '', completed: false, priority: 2 },{ id: 1, text: 'qweqweqwe', completed: false, priority: 3 }]);
  });
  
});

