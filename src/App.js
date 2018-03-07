import React, { Component } from 'react';
import Movies from './sampledata';
import './style.css';
import './App.css';

import TopBar from './TopBar';
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

  handleListClick = (i) => {
    // let selectedMovie = this.props.selectedMovie;
    // selectedMovie = i;
    // this.setState({ selectedMovie: Movies[i] });
    console.log("it works!");
  }

  render() {
    return (
      <div className="App">
        <TopBar/>
        <div className="flex">
          <LeftBar/>
          <List handleListClick={this.handleListClick} />
          <DetailsPane selectedMovie={this.state.selectedMovie}/>
        </div>
      </div>
    );
  }
}

export default App;