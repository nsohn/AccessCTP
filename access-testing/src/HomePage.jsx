import React, { PureComponent } from 'react';
import Login from './Login';
import Register from './RegisterUser';
import TestRowManager from './TestRowManager';

import './HomePage.css'

class HomePage extends PureComponent{
  render(){
    return(
        <div className="homepage">
          <Login />
          <Register />
        </div>
    )
  }
}

export default HomePage;
