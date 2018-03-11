import React, { Component } from 'react';
import base from './base';
import './css/style.css';
import './css/App.css';

import TopBar from './TopBar';
import LeftBar from './LeftBar';
import List from './List';
import DetailsPane from './DetailsPane';

class App extends Component {
  state = {
    list: [],
    selectedMovie: {},
  }

  componentDidMount() {
    this.ref = base.syncState("list", {
      context: this,
      state: "list",
      options: { asArray: true }
    });
    this.ref = base.syncState("selectedMovie", {
      context: this,
      state: "selectedMovie"
    });
  }

  handleListClick = (movie) => {
    this.setState({ selectedMovie: movie });
  }

  render() {
    return (
      <div className="App">
        <TopBar/>
        <div className="flex">
          <LeftBar/>
          <List movies={this.state.list} handleListClick={this.handleListClick} />
          <DetailsPane selectedMovie={this.state.selectedMovie}/>
        </div>
      </div>
    );
  }
}

export default App;