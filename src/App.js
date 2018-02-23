import React, { Component } from 'react';
import './style.css';
import './App.css';

import LeftBar from './LeftBar';
import List from './List';
import DetailsPane from './DetailsPane';

class App extends Component {
  render() {
    return (
      <div className="App flex">
        <LeftBar/>
        <List/>
        <DetailsPane/>
      </div>
    );
  }
}

export default App;