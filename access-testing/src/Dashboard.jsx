import React, { Component } from 'react';

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state={
      typeStudent: true,
      typeProfessor: false,
      typeAdmin: false
    };
  }

  }
  render(){
    let typeStudent = this.state.typeStudent
    let typeProfessor = this.state.typeProfessor
    let typeAdmin = this.state.typeAdmin
    
    let userView = <div></div>
    let scheduledTests= <div></div>

    if (typeStudent){
      userView =
      <h1> hello </h1>
    return(
      {userView}
    );
  }
}

export default Login;
