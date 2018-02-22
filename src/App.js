import React, { Component } from 'react';
import './App.css';

import List from './List';
import DetailsPane from './DetailsPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List/>
        <DetailsPane/>
      </div>
    );
  }
}

export default App;
