import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(){
    const { userName, password } = this.state;
    const jsonBody = {
      user_name: userName,
      password: password
    }
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then((res) => console.log(res))
  }
  render(){
    return (
      <div>
      {this.state.userName} Email: <input name="userName" onChange={this.onChange} type="email" />
      {this.state.password}Password: <input name="password" onChange={this.onChange} type="password" />
      <button onClick={this.onSubmit}>Login</button>
      </div>
    )
  }
}
export default Login;
