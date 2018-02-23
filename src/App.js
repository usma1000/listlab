import React, { Component } from 'react';
import Movies from './sampledata';
import './style.css';
import './App.css';

import LeftBar from './LeftBar';
import List from './List';
import DetailsPane from './DetailsPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: Movies[0],
    };
  }

  render() {
    return (
      <div className="App flex">
        <LeftBar/>
        <List/>
        <DetailsPane selectedMovie={this.state.selectedMovie}/>
      </div>
    );
  }
}

export default App;