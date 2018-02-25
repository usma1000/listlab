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
    this.handleListClick = this.handleListClick.bind(this);
    this.state = {
      selectedMovie: Movies[0],
    };
  }

  handleListClick(i) {
    // let selectedMovie = this.props.selectedMovie;
    // selectedMovie = i;
    this.setState({ selectedMovie: i });
  }

  render() {
    return (
      <div className="App flex">
        <LeftBar/>
        <List handleClick={() => this.handleListClick}/>
        <DetailsPane selectedMovie={this.state.selectedMovie}/>
      </div>
    );
  }
}

export default App;