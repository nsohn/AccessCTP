import React, { Component } from 'react';
import Header from './Header';
import RegisterUser from './RegisterUser';
import Login from './Login';
import RequestTestForm from './RequestTestForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Login />
        </div>
        <RegisterUser />
      </div>
    );
  }
}

export default App;
