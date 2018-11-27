import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
      <Router>
        <Route exact path='/' render={ props => 
          <HomePage />
        }/>
      </Router>
      </div>
    );
  }
}

export default App;
