import React, { Component } from 'react';
import Header from './Header';
import RegisterUser from './RegisterUser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RegisterUser />
      </div>
    );
  }
}

export default App;
