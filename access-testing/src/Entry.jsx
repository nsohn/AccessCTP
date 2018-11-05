import React, { Component } from 'react';
import RegisterUser from 'RegisterUser';

class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {
      newUser : true
    }
  }
  render(){
    const { newUser } = this.state;
    return newUser ? <RegisterUser /> : <h2>login</h2>;
  }
}

export default Entry;
