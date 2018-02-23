import React, { Component } from 'react';
import './style.css';
import './App.css';

import TopBar from './TopBar';
import List from './List';
import DetailsPane from './DetailsPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <div className="flex">
          <List/>
          <DetailsPane/>
        </div>
      </div>
    );
  }
}

export default App;