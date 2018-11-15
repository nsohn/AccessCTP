import React, { Component } from 'react';
import InputMask from 'react-input-mask'
import PageLayout from './PageLayout';
import './RegisterUser.css';
class RegisterStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      fName: '',
      lName: '',
      emplid: 0,
      cellNum: 0
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
    const { email, fName, lName, emplid, cellNum } = this.state;
    if (!email && !fName && !lName && !emplid && !cellNum){
      alert('error');
    } else {
      const userPermission = email.substring(email.lastIndexOf("@") +1);

      alert('good');
    }
  }
  render(){
    return (
      <PageLayout content={
        <form>
          <div className="register-form">
            First Name: <input required name="fName" onChange={this.onChange} type="string" />
            Last Name: <input name="lName" onChange={this.onChange} type="string" />
            Email: <input mask="+@myhunter.cuny.edu" name="email" onChange={this.onChange} type="email" />
            EMPLID: <input mask="999999999" name="emplid" onChange={this.onChange} type="string" />
            Cell Phone: <InputMask  mask="+1 999-999-9999" name="cellNum" onChange={this.onChange} type="string" />
            <button onClick={this.onSubmit}>Register</button>
          </div>
        </form>
      }
      />
    )
  }
}

export default RegisterStudent;
