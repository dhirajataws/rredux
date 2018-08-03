import React, { Component } from 'react';
import {saveContainer as AddAddress} from '../src/containers/saveContainer';

// import './App.css';
class App extends Component {
  render() {
    return (
      <div className="container">
        <AddAddress/>
      </div>
    );
  }
}

export default App;
