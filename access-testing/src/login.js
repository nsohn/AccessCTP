import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: ""
    };
    this.onChange=this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    return(
      <form>
        <div>
        Username: {this.state.username} <input name= "username" onChange={this.onChange} type="email"/>
        Password: <input name= "password" onChange={this.onChange} type="password"/>
        </div>
      </form>
    );
  }
}

export default Login;
