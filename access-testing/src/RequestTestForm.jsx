import React, { Component } from 'react';
import './RequestTestForm.css';
import { FormGroup, FormControl } from "react-bootstrap";

class RequestTestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseName:"",
      professorName:"",
      email: "",
      examStart: 0,
      examLength: 0
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
    //fetch do post
    const { courseName, professorName, email, examStart, examLength } = this.state;
    const exam_end = examStart + (examLength*2);
    // if (!email && !fName && !lName && !emplid && !cellNum){
    //   alert('error');
    // } else {
      // const userPermission = email.substring(email.lastIndexOf("@") +1);

      // alert('good');
    // }
    const jsonBody = {
      course_number: courseName,
      prof_name: professorName,
      email: email,
      exam_start: examStart,
      exam_end: exam_end
    }
    console.log(jsonBody);

    fetch('/test/addTest/', {
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


render(){
  return (
    <div className="test-form">
      <form>
      <FormGroup controlId="formBasicText" >
      <h5 class="moveLeft">Course Number</h5>
      <FormControl
        name = "courseName"
        type="text"
        value={this.state.courseName}
        placeholder="e.g. CSCI 150"
        onChange={this.onChange}
      /> <br />
      <h5 class="moveLeft">Name of Professor</h5>
      <FormControl
        name = "professorName"
        type="string"
        value={this.state.professorName}
        placeholder="Enter first and last name of your professor"
        onChange={this.onChange}
      /> <br />
      <h5 class="moveLeft">Professor's Email</h5>
      <FormControl
        name="email"
        type="email"
        value={this.state.email}
        placeholder="@hunter.cuny.edu"
        onChange={this.onChange}
      /> <br/>
        <h5 class="moveLeft">Exam Start Time: </h5>
        <FormControl
          name="examStart"
          type="number"
          value={this.state.examStart}
          placeholder="Enter begin time"
          onChange={this.onChange}
        /> <br />
        <h5 class="moveLeft">Exam Time Length</h5>
        <FormControl
          name="examLength"
          type="number"
          value={this.state.examLength}
          placeholder="Enter time in hours"
          onChange={this.onChange}
        /> <br />
        <button class="button" onClick={this.onSubmit}>Submit Testing Form</button>
      </FormGroup>
      </form>
      </div>
  )
}
}
export default RequestTestForm;
