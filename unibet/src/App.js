import React, { Component } from 'react';
import {AddContainer} from '../src/containers/addAddress';
import {DisplayContainer} from "./containers/displayAddressList";
class App extends Component {

  render() {
    return (
      <div className="container">
        <AddContainer/>
        <DisplayContainer/>
      </div>
    );
  }
}

export default App;
