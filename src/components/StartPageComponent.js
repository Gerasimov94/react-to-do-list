import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../favicon.ico';


export default class StartPageComponent extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Список задач</h2>
        </div>
        <div id="main-container">
          <button><Link to="/todolist" >Start App</Link></button>
        </div>
      </div>
    );
  }

}
