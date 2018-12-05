import React, { Component } from 'react';
import './RequestTestForm.css';
import { FormGroup, FormControl, ControlLabel, Modal, ListGroup, ListGroupItem, Jumbotron, Button, Badge} from "react-bootstrap";

class RequestTestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseName:"",
      professorName:"",
      email: "",
      examStart: 0,
      examLength: ""
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
        <h5 class="moveLeft">Exam Start Time: </h5> <input name="examStart" onChange={this.onChange} type="time" /> <br />
        <h5 class="moveLeft">Exam Time Length</h5>
        <FormControl
          name="examLength"
          type="string"
          value={this.state.examLength}
          placeholder="Enter time in minutes"
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
