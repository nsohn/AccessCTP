import React, { Component } from 'react';
import Header from './Header';
import HomePage from './HomePage';


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
