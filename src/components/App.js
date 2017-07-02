import React from 'react';
import logo from '../favicon.ico';
import AddTodoContainer from '../containers/AddTodoContainer';
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer';
import FiltersContainer from '../containers/FiltersContainer';
import '../css/App.css';
import FooterComponent from './FooterComponent';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Список задач</h2>
        </div>
        <div id="main-container">
          <div id="header">
            <FiltersContainer />
            <AddTodoContainer />
          </div>
          <VisibleTodoListContainer />
          <FooterComponent />
        </div>
      </div>
    );
  }
}

