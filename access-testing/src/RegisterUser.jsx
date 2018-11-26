import React, { Component } from 'react';
import InputMask from 'react-input-mask'
import Select from 'react-select';
import PageLayout from './PageLayout';
import './RegisterUser.css';

const userOptions = [
  {value: 'student', label: 'Student'},
  {value: 'professor', label: 'Professor'},
  {value: 'accessStaff', label: 'Access Staff'}
]
class RegisterUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      fName: '',
      lName: '',
      emplid: 0,
      cellNum: 0,
      userPemission: null
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUserPermissions = this.onChangeUserPermissions.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onChangeUserPermissions(userPermission){
    console.log(userPermission);
    this.setState({ userPermission })
  }
  onSubmit(){
    //fetch do post
    const { email, fName, lName } = this.state;

    // if (!email && !fName && !lName && !emplid && !cellNum){
    //   alert('error');
    // } else {
      // const userPermission = email.substring(email.lastIndexOf("@") +1);

      // alert('good');
    // }
    const jsonBody = {
      first_name: fName,
      last_name: lName,
      email: email
    }

    fetch('/auth/signup/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then((res) => console.log(res))/*.then((data) => {
      console.log(data)
      /*
      if(data.statusCode === 200) {
        alert(data.msg);
      } else {
        alert('error');
      }
    });*/ // callback to App.js
  }

  // return json on backend with status code and message
  render(){
    const { userPemission } = this.state;
    console.log(`data: ${userPemission}`);
    return (
      <PageLayout content={
          <div className="register-form">
            First Name: <input required name="fName" onChange={this.onChange} type="string" />
            Last Name: <input name="lName" onChange={this.onChange} type="string" />
            Email: <input mask="+@myhunter.cuny.edu" name="email" onChange={this.onChange} type="email" />
            EMPLID: <input mask="999999999" name="emplid" onChange={this.onChange} type="string" />
            Cell Phone: <InputMask  mask="+1 999-999-9999" name="cellNum" onChange={this.onChange} type="string" />
            {/*Add accomodations*/}
            User Type:
            <div className="dropdown">
              <Select
                options={userOptions}
                value={userPemission}
                onChange={this.onChangeUserPermissions}
                placeholder="Please select which type of user you are."
                name="userPemission"
                />
            </div>
            <button onClick={this.onSubmit}>Register</button>
          </div>
      }
      />
    )
  }
}

export default RegisterUser;
