import React, { Component } from 'react';

class RegisterStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      fName: '',
      lname: '',
      emplid: 0,
      cellNum: 0
    }
    this.onChange = this.onChange.bind(this);
  }

  /*
  How can we make this function generic
  for all of the different inputs?
  */
  onChange(e){
    this.setState({
      email: e.target.value
    })
  }
  render(){
    return (
      <div className="register-form">
        <form>
          Email: <input title="email" onChange={this.onChange} type="email" /> {this.state.email}
        </form>
      </div>
    )
  }
}

export default RegisterStudent;
