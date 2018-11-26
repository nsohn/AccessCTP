import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
