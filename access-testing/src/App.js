import React, { Component } from 'react';
import Header from './Header';
// import HomePage from './HomePage';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
