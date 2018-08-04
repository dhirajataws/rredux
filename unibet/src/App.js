import React, { Component } from 'react';
import {saveContainer as AddAddress} from '../src/containers/saveContainer';
import {displayContainer as DisplayAddress} from "./containers/displayContainer";

// import './App.css';
class App extends Component {

  render() {
    return (
      <div className="container">
        <AddAddress/>
        <DisplayAddress/>
      </div>
    );
  }
}

export default App;
