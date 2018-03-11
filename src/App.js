import React, { Component } from 'react';
import Movies from './sampledata';
import './css/style.css';
import './css/App.css';

import TopBar from './TopBar';
import LeftBar from './LeftBar';
import List from './List';
import DetailsPane from './DetailsPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedMovie: Movies[0],
    };
  }

  loadSamples = () => {
    this.setState({list: Movies});
  }

  handleListClick = (movie) => {
    this.setState({ selectedMovie: movie });
  }

  componentDidMount() {
    // REMOVE AFTER TESTING
    this.loadSamples();
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