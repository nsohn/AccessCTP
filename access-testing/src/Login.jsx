import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <div>
      Email: <input name="userName" onChange={this.onChange} type="email" />
      Password: <input name="password" onChange={this.onChange} type="password" />
      </div>
    )
  }
}
export default Login;
